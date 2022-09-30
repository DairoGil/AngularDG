import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class TrmService {

  constructor(protected http: HttpService) { }

  public obtenerDolar() {
    return this.http.doGet<any[]>(`/resource/32sa-8pi3.json`, this.http.optsName('obtener trm'));
  }
}
