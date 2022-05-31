import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Paciente } from '../model/paciente';

import { PacienteService } from './paciente.service';

describe('PacienteService', () => {
  let httpMock: HttpTestingController;
  let service: PacienteService;
  const apiEndpointPacientes = `${environment.endpoint}/paciente`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpService, PacienteService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(PacienteService);
  });

  it('should be created', () => {
    const pacienteService: PacienteService = TestBed.inject(PacienteService);
    expect(pacienteService).toBeTruthy();
  });

  it('deberia registrar un paciente', () => {
    const dummyPaciente = new Paciente(1, 'Paciente 1', '1995-05-03');
    service.guardar(dummyPaciente).subscribe(idPaciente => {
      expect(idPaciente).toEqual(1);
    });
    const req = httpMock.expectOne(apiEndpointPacientes);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<number>({body: 1}));
  });
});
