import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SesionService } from '@sesion/shared/service/sesion.service';

const LONGITUD_MAXIMA_PERMITIDA = 11;

@Component({
  selector: 'app-agendar-sesion',
  templateUrl: './agendar-sesion.component.html',
  styleUrls: ['./agendar-sesion.component.css']
})
export class AgendarSesionComponent implements OnInit {
  sesionForm: FormGroup;
  mensaje = '';
  mostrar = false;

  constructor(protected sesionService: SesionService) { }

  ngOnInit(): void {
    this.construirFormularioProducto();
  }

  agendar() {
    this.sesionService.guardar(this.sesionForm.value).subscribe( () => {
      this.mostrar = true;
      this.mensaje = 'Se agendo correctamente la sesión';
    },
    error => {
      this.mostrar = true;
      this.mensaje = error.error.mensaje;
    });
  }

  private construirFormularioProducto() {
      this.sesionForm = new FormGroup({
        idPaciente: new FormControl('', [Validators.required, Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA)]),
        fecha: new FormControl('', [Validators.required]),
        hora: new FormControl('', [Validators.required])
      });
  }
}
