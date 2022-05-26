import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { DetalleSesion } from '../model/detalleSesion';

import { SesionService } from './sesion.service';

describe('SesionService', () => {
  let httpMock: HttpTestingController;
  let service: SesionService;
  const apiEndpointSesionConsulta = `${environment.endpoint}/sesion/pendientes-paciente`;

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
});
