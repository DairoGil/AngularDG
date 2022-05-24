import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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

  constructor(protected sesionService: SesionService) { }

  ngOnInit(): void {
    this.construirFormularioPaciente();
    
  }

  consultar() {
    this.sesionService.consultarSesionesPendientes(this.pacienteForm.value.idPaciente).subscribe(
      data => {
        this.listaSesiones = data;
      }
    )
  }

  private construirFormularioPaciente() {
    this.pacienteForm = new FormGroup({
      idPaciente: new FormControl('', [Validators.required, Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA)])
    })
  }

}
