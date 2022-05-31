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
    expect(component.clasesAlerta).toEqual('alert alert-success');
    expect(component.mensajeEstadoTransaccion).toEqual('Se agendo correctamente la sesión');
    expect(component.sesionForm.valid).toBeFalsy();
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
    expect(component.clasesAlerta).toEqual('alert alert-danger');
    expect(component.mensajeEstadoTransaccion).toEqual('error');
  });

  it('agendando sesion se produce un error sin mensaje', () => {
    spyOn(sesionService, 'guardar').and.returnValue(
      throwError({status: 400, error: {}
      })
    );
    expect(component.sesionForm.valid).toBeFalsy();
    component.sesionForm.controls.idPaciente.setValue(1);
    component.sesionForm.controls.fecha.setValue('2022-05-31');
    component.sesionForm.controls.hora.setValue(8);
    expect(component.sesionForm.valid).toBeTruthy();

    component.agendar();

    expect(component.mostrarMensaje).toEqual(false);
    expect(component.clasesAlerta).toEqual('');
    expect(component.mensajeEstadoTransaccion).toEqual('');
  });

  it('validando eleccion de dia sabado', () => {
    component.sesionForm.controls.fecha.setValue('2022-05-28');

    component.validarFinSemana();

    expect(component.mostrarMensaje).toEqual(true);
    expect(component.mensajeEstadoTransaccion).toEqual('No hay atención los fines de semana');
  });

  it('validando eleccion de dia domingo', () => {
    component.sesionForm.controls.fecha.setValue('2022-05-29');

    component.validarFinSemana();

    expect(component.mostrarMensaje).toEqual(true);
    expect(component.mensajeEstadoTransaccion).toEqual('No hay atención los fines de semana');
  });

  it('validando eleccion de dia diferente a fin de semana', () => {
    component.sesionForm.controls.fecha.setValue('2022-05-31');

    component.validarFinSemana();

    expect(component.mostrarMensaje).toEqual(false);
  });

  it('validando la limpieza de campos', () => {
    component.limpiarCampos();

    expect(component.sesionForm.valid).toBeFalsy();
    expect(component.mensajeEstadoTransaccion).toEqual('');
    expect(component.mostrarMensaje).toEqual(false);
    expect(component.clasesAlerta).toEqual('');
  });
});
