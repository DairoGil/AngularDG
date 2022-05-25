import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { DetalleSesion } from '@sesion/shared/model/detalleSesion';
import { SesionService } from '@sesion/shared/service/sesion.service';
import { SharedModule } from '@shared/shared.module';
import { of } from 'rxjs';

import { ListarSesionComponent } from './listar-sesion.component';

describe('ListarSesionComponent', () => {
  let component: ListarSesionComponent;
  let fixture: ComponentFixture<ListarSesionComponent>;
  let sesionService: SesionService;
  const listaSesiones: DetalleSesion[] = [
    new DetalleSesion(1,'2022-06-25',8,'PENDIENTE', ''), new DetalleSesion(2,'2022-06-25',9,'PENDIENTE', '')
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarSesionComponent ],
      imports: [CommonModule,
        HttpClientTestingModule,
        SharedModule
      ],
      providers: [HttpService, SesionService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarSesionComponent);
    component = fixture.componentInstance;
    sesionService = TestBed.inject(SesionService);
    spyOn(sesionService, 'consultarSesionesPendientes').and.returnValue(
      of(listaSesiones)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deberia buscar las sesiones pendientes por codigo de paciente', () => {
    component.consultar();
    expect(component.listaSesiones.length).toBe(2);
    expect(component.listaSesiones[0].id).toBe(1);
    expect(component.listaSesiones[1].id).toBe(2);
  });
});
