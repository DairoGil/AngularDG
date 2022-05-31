import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HorasPermitidas } from '@sesion/shared/model/horasPermitidas';
import { SesionService } from '@sesion/shared/service/sesion.service';

const LONGITUD_MAXIMA_PERMITIDA = 11;

@Component({
  selector: 'app-agendar-sesion',
  templateUrl: './agendar-sesion.component.html',
  styleUrls: ['./agendar-sesion.component.css']
})
export class AgendarSesionComponent implements OnInit {
  sesionForm: FormGroup;
  mensajeEstadoTransaccion = '';
  mostrarMensaje = false;
  clasesAlerta = '';
  minDate = new Date();
  maxDate = new Date();
  horario: HorasPermitidas[];

  constructor(protected sesionService: SesionService) { }

  ngOnInit(): void {
    this.construirFormularioProducto();
    this.minDate.setDate(this.minDate.getDate() + 2);
    this.maxDate.setFullYear(this.maxDate.getFullYear() + 1);
    this.horario = [
      {valor: 8, hora: '08:00', disponible: true},
      {valor: 9, hora: '09:00', disponible: true},
      {valor: 10, hora: '10:00', disponible: true},
      {valor: 11, hora: '11:00', disponible: true},
      {valor: 14, hora: '14:00', disponible: true},
      {valor: 15, hora: '15:00', disponible: true},
      {valor: 16, hora: '16:00', disponible: true},
      {valor: 17, hora: '17:00', disponible: true}
    ];
  }

  agendar() {
    if (!this.sesionForm.valid){
      this.mostrarMensaje = true;
      this.clasesAlerta = 'alert alert-danger';
      this.mensajeEstadoTransaccion = 'Faltan campos por llenar';
    }else{
      this.sesionService.guardar(this.sesionForm.value).subscribe( () => {
        this.mostrarMensaje = true;
        this.clasesAlerta = 'alert alert-success';
        this.mensajeEstadoTransaccion = 'Se agendo correctamente la sesión';
      },
      error => {
        if (error.error.mensaje != null){
          this.mostrarMensaje = true;
          this.clasesAlerta = 'alert alert-danger';
          this.mensajeEstadoTransaccion = error.error.mensaje;
        }
      });
    }
  }

  private construirFormularioProducto() {
    this.sesionForm = new FormGroup({
      idPaciente: new FormControl('', [Validators.required, Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA)]),
      fecha: new FormControl('', [Validators.required]),
      hora: new FormControl('', [Validators.required])
    });
  }

  validarFinSemana() {
    const fechaCapturada = new Date(`${this.sesionForm.value.fecha}`);
    fechaCapturada.setHours(fechaCapturada.getHours() + 5);
    const day = fechaCapturada.getDay();
    if (day === 0 || day === 6){
      this.mostrarMensaje = true;
      this.clasesAlerta = 'alert alert-danger';
      this.mensajeEstadoTransaccion = 'No hay atención los fines de semana';
    }else{
      this.mostrarMensaje = false;
    }
  }

  limpiarCampos() {
    this.sesionForm.reset();
    this.mensajeEstadoTransaccion = '';
    this.mostrarMensaje = false;
    this.clasesAlerta = '';
  }
}
