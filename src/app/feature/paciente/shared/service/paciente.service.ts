import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Paciente } from '../model/paciente';

@Injectable()
export class PacienteService {

  constructor(protected http: HttpService) { }

  public guardar(paciente: Paciente) {
    console.log(paciente.fechaNacimiento);
    return this.http.doPost<Paciente, number>(`${environment.endpoint}/paciente`, paciente, this.http.optsName('registrar paciente'));
  }
}
