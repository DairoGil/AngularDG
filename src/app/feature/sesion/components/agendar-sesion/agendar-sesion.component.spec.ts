import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { SesionService } from '@sesion/shared/service/sesion.service';
import { SharedModule } from '@shared/shared.module';
import { of, throwError } from 'rxjs';

import { AgendarSesionComponent } from './agendar-sesion.component';

describe('AgendarSesionComponent', () => {
  let component: AgendarSesionComponent;
  let fixture: ComponentFixture<AgendarSesionComponent>;
  let sesionService: SesionService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendarSesionComponent ],
      imports: [ CommonModule, HttpClientTestingModule, SharedModule ],
      providers: [ HttpService, SesionService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendarSesionComponent);
    component = fixture.componentInstance;
    sesionService = TestBed.inject(SesionService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.sesionForm.valid).toBeFalsy();
  });

  it('agendando sesion', () => {
    spyOn(sesionService, 'guardar').and.returnValue(
      of(1)
    );
    expect(component.sesionForm.valid).toBeFalsy();
    component.sesionForm.controls.idPaciente.setValue(1);
    component.sesionForm.controls.fecha.setValue('2022-05-31');
    component.sesionForm.controls.hora.setValue(8);
    expect(component.sesionForm.valid).toBeTruthy();

    component.agendar();

    expect(component.mostrarMensaje).toEqual(true);
    expect(component.mensajeEstadoTransaccion).toEqual('Se agendo correctamente la sesión');
  });

  it('agendando sesion servicio retorna error', () => {
    spyOn(sesionService, 'guardar').and.returnValue(
      throwError({status: 400, error: {mensaje: 'error'}
    })
    );
    expect(component.sesionForm.valid).toBeFalsy();
    component.sesionForm.controls.idPaciente.setValue(1);
    component.sesionForm.controls.fecha.setValue('2022-05-31');
    component.sesionForm.controls.hora.setValue(8);
    expect(component.sesionForm.valid).toBeTruthy();

    component.agendar();

    expect(component.mostrarMensaje).toEqual(true);
    expect(component.mensajeEstadoTransaccion).toEqual('error');
  });
});
