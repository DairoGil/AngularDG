import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { DetalleSesion } from '../model/detalleSesion';
import { Sesion } from '../model/sesion';

@Injectable()
export class SesionService {

  constructor(protected http: HttpService) { }

  public consultarSesionesPendientes(idPaciente: number){
    return this.http.doGet<DetalleSesion[]>(`${environment.endpoint}/sesion/pendientes-paciente/${idPaciente}`,
    this.http.optsName('consultar sesiones pendientes por paciente'));
  }

  public guardar(sesion: Sesion) {
    return this.http.doPost<Sesion, number>(`${environment.endpoint}/sesion`, sesion, this.http.optsName('agendar/reagendar sesion'));
  }
}
