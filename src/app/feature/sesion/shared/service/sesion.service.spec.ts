import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { DetalleSesion } from '../model/detalleSesion';
import { Sesion } from '../model/sesion';

import { SesionService } from './sesion.service';

describe('SesionService', () => {
  let httpMock: HttpTestingController;
  let service: SesionService;
  const apiEndpointSesionConsulta = `${environment.endpoint}/sesion/pendientes-paciente`;
  const apiEndpointSesiones = `${environment.endpoint}/sesion`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpService, SesionService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(SesionService);
  });

  it('should be created', () => {
    const sesionService: SesionService = TestBed.inject(SesionService);
    expect(sesionService).toBeTruthy();
  });

  it('deberia listar sesiones pendientes por paciente', () => {
    const dummySesiones = [
      new DetalleSesion(1, '2022-06-25', 8, 'PENDIENTE', ''), new DetalleSesion(1, '2022-06-25', 8, 'PENDIENTE', '')
    ];
    service.consultarSesionesPendientes(6).subscribe(sesiones => {
      expect(sesiones.length).toBe(2);
      expect(sesiones).toEqual(dummySesiones);
    });
    const req = httpMock.expectOne(`${apiEndpointSesionConsulta}/6`);
    expect(req.request.method).toBe('GET');
    req.flush(dummySesiones);
  });

  it('deberia agendar una sesión', () => {
    const dummySesion = new Sesion(1, '2022-05-31', 8);
    service.guardar(dummySesion).subscribe(idSesion => {
      expect(idSesion).toEqual(1);
    });
    const req = httpMock.expectOne(apiEndpointSesiones);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<number>({body: 1}));
  });
});
