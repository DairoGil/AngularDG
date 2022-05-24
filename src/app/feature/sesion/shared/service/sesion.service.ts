import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { DetalleSesion } from '../model/detalleSesion';

@Injectable({
  providedIn: 'root'
})
export class SesionService {

  constructor(protected http: HttpService) { }

  public consultarSesionesPendientes(idPaciente: number){
    return this.http.doGet<DetalleSesion[]>(`${environment.endpoint}/sesion/pendientes-paciente/${idPaciente}`,
    this.http.optsName('consultar sesiones pendientes por paciente'))
  }
}
