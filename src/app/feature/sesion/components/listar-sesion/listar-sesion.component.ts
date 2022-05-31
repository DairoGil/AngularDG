import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HorasPermitidas } from '@sesion/shared/model/horasPermitidas';
import { DetalleSesion } from '../../shared/model/detalleSesion';
import { SesionService } from '../../shared/service/sesion.service';

const LONGITUD_MAXIMA_PERMITIDA = 11;

@Component({
  selector: 'app-listar-sesion',
  templateUrl: './listar-sesion.component.html',
  styleUrls: ['./listar-sesion.component.css']
})
export class ListarSesionComponent implements OnInit {
  pacienteForm: FormGroup;
  public listaSesiones: DetalleSesion[];
  mensajeEstadoTransaccion = '';
  mostrarMensaje = false;
  clasesAlerta = '';
  horario: HorasPermitidas[];

  constructor(protected sesionService: SesionService) { }

  ngOnInit(): void {
    this.construirFormularioPaciente();
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

  consultar() {
    this.sesionService.consultarSesionesPendientes(this.pacienteForm.value.idPaciente).subscribe(
      data => {
        this.convertirHora(data);
        this.listaSesiones = data;
    },
    error => {
      if (error.error.mensaje != null){
        this.mostrarMensaje = true;
        this.clasesAlerta = 'alert alert-danger';
        this.mensajeEstadoTransaccion = error.error.mensaje;
      }
    });
  }

  private construirFormularioPaciente() {
    this.pacienteForm = new FormGroup({
      idPaciente: new FormControl('', [Validators.required, Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA)])
    });
  }

  private convertirHora(sesiones: DetalleSesion[]) {
    sesiones.map(sesion => {
      sesion.hora = this.horario.filter(x => x.valor === parseInt(sesion.hora, 10))[0].hora;
      return sesion;
    });
  }
}
