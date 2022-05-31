import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { PacienteService } from '@paciente/shared/service/paciente.service';
import { SharedModule } from '@shared/shared.module';
import { of, throwError } from 'rxjs';

import { RegistrarPacienteComponent } from './registrar-paciente.component';

describe('RegistrarPacienteComponent', () => {
  let component: RegistrarPacienteComponent;
  let fixture: ComponentFixture<RegistrarPacienteComponent>;
  let pacienteService: PacienteService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarPacienteComponent ],
      imports: [ CommonModule, HttpClientTestingModule, SharedModule ],
      providers: [ PacienteService, HttpService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarPacienteComponent);
    component = fixture.componentInstance;
    pacienteService = TestBed.inject(PacienteService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.pacienteForm.valid).toBeFalsy();
  });

  it('registrando paciente', () => {
    spyOn(pacienteService, 'guardar').and.returnValue(
      of(1)
    );
    expect(component.pacienteForm.valid).toBeFalsy();
    component.pacienteForm.controls.idPaciente.setValue(1);
    component.pacienteForm.controls.nombre.setValue('Paciente 1');
    component.pacienteForm.controls.fechaNacimiento.setValue('2022-05-31');
    expect(component.pacienteForm.valid).toBeTruthy();

    component.registrar();

    expect(component.mostrarMensaje).toEqual(true);
    expect(component.clasesAlerta).toEqual('alert alert-success');
    expect(component.mensajeEstadoTransaccion).toEqual('Se registro correctamente el paciente');
    expect(component.pacienteForm.valid).toBeFalsy();
  });

  it('registrando paciente servicio retorna error', () => {
    spyOn(pacienteService, 'guardar').and.returnValue(
      throwError({status: 400, error: {mensaje: 'error'}
      })
    );
    expect(component.pacienteForm.valid).toBeFalsy();
    component.pacienteForm.controls.idPaciente.setValue(1);
    component.pacienteForm.controls.nombre.setValue('Paciente 1');
    component.pacienteForm.controls.fechaNacimiento.setValue('2022-05-31');
    expect(component.pacienteForm.valid).toBeTruthy();

    component.registrar();

    expect(component.mostrarMensaje).toEqual(true);
    expect(component.clasesAlerta).toEqual('alert alert-danger d-flex align-items-center');
    expect(component.mensajeEstadoTransaccion).toEqual('error');
  });

  it('validando la limpieza de campos', () => {
    component.limpiarCampos();

    expect(component.pacienteForm.valid).toBeFalsy();
    expect(component.mensajeEstadoTransaccion).toEqual('');
    expect(component.mostrarMensaje).toEqual(false);
    expect(component.clasesAlerta).toEqual('');
  });
});
