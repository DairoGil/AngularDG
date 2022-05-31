import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PacienteService } from '@paciente/shared/service/paciente.service';

const LONGITUD_MAXIMA_PERMITIDA_ID = 11;
const LONGITUD_MAXIMA_PERMITIDA_TELEFONO = 15;

@Component({
  selector: 'app-registrar-paciente',
  templateUrl: './registrar-paciente.component.html',
  styleUrls: ['./registrar-paciente.component.css']
})
export class RegistrarPacienteComponent implements OnInit {
  pacienteForm: FormGroup;
  mensajeEstadoTransaccion = '';
  mostrarMensaje = false;
  clasesAlerta = '';
  minDate = new Date();
  maxDate = new Date();

  constructor(protected pacienteService: PacienteService) { }

  ngOnInit(): void {
    this.construirFormularioPaciente();
    this.minDate.setFullYear(this.minDate.getFullYear() - 130);
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 1);
  }

  private construirFormularioPaciente() {
    this.pacienteForm = new FormGroup({
      idPaciente: new FormControl('', [Validators.required, Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_ID)]),
      nombre: new FormControl('', [Validators.required]),
      fechaNacimiento: new FormControl('', [Validators.required]),
      telefono: new FormControl('', [Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_TELEFONO)])
    });
  }

  registrar() {
    console.log(this.pacienteForm.value.fechaNacimiento);
    this.pacienteService.guardar(this.pacienteForm.value).subscribe( () => {
      this.mostrarMensaje = true;
      this.clasesAlerta = 'alert alert-success';
      this.mensajeEstadoTransaccion = 'Se registro correctamente el paciente';
      this.pacienteForm.reset();
    },
    error => {
      if (error.error.mensaje != null){
        this.mostrarMensaje = true;
        this.clasesAlerta = 'alert alert-danger d-flex align-items-center';
        this.mensajeEstadoTransaccion = error.error.mensaje;
      }
    });
  }

  limpiarCampos() {
    this.pacienteForm.reset();
    this.mensajeEstadoTransaccion = '';
    this.mostrarMensaje = false;
    this.clasesAlerta = '';
  }
}
