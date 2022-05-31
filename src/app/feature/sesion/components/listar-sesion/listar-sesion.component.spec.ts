import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { DetalleSesion } from '@sesion/shared/model/detalleSesion';
import { SesionService } from '@sesion/shared/service/sesion.service';
import { SharedModule } from '@shared/shared.module';
import { of, throwError } from 'rxjs';

import { ListarSesionComponent } from './listar-sesion.component';

describe('ListarSesionComponent', () => {
  let component: ListarSesionComponent;
  let fixture: ComponentFixture<ListarSesionComponent>;
  let sesionService: SesionService;
  const listaSesiones: DetalleSesion[] = [
    new DetalleSesion(1, '2022-06-25', '8', 'PENDIENTE', ''), new DetalleSesion(2, '2022-06-25', '9', 'PENDIENTE', '')
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarSesionComponent ],
      imports: [CommonModule,
        HttpClientTestingModule,
        SharedModule
      ],
      providers: [HttpService, SesionService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarSesionComponent);
    component = fixture.componentInstance;
    sesionService = TestBed.inject(SesionService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.pacienteForm.valid).toBeFalsy();
  });

  it('deberia buscar las sesiones pendientes por codigo de paciente', () => {
    spyOn(sesionService, 'consultarSesionesPendientes').and.returnValue(
      of(listaSesiones)
    );

    expect(component.pacienteForm.valid).toBeFalsy();
    component.pacienteForm.controls.idPaciente.setValue(1);
    expect(component.pacienteForm.valid).toBeTruthy();

    component.consultar();

    expect(component.listaSesiones.length).toBe(2);
    expect(component.listaSesiones[0].id).toBe(1);
    expect(component.listaSesiones[1].id).toBe(2);
  });

  it('no encuentra sesiones pendientes para el paciente', () => {
    spyOn(sesionService, 'consultarSesionesPendientes').and.returnValue(
      throwError({status: 400, error: {mensaje: 'error'}
      })
    );
    expect(component.pacienteForm.valid).toBeFalsy();
    component.pacienteForm.controls.idPaciente.setValue(3);
    expect(component.pacienteForm.valid).toBeTruthy();

    component.consultar();

    expect(component.mostrarMensaje).toEqual(true);
    expect(component.clasesAlerta).toEqual('alert alert-danger');
    expect(component.mensajeEstadoTransaccion).toEqual('error');
  });

  it('al buscar las sesiones se produce un error sin mensaje', () => {
    spyOn(sesionService, 'consultarSesionesPendientes').and.returnValue(
      throwError({status: 400, error: {}
      })
    );
    expect(component.pacienteForm.valid).toBeFalsy();
    component.pacienteForm.controls.idPaciente.setValue(3);
    expect(component.pacienteForm.valid).toBeTruthy();

    component.consultar();

    expect(component.mostrarMensaje).toEqual(false);
    expect(component.clasesAlerta).toEqual('');
    expect(component.mensajeEstadoTransaccion).toEqual('');
  });
});
