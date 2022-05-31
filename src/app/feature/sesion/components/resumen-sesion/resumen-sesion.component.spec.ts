import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleSesion } from '../../shared/model/detalleSesion';

import { ResumenSesionComponent } from './resumen-sesion.component';

describe('ResumenSesionComponent', () => {
  let component: ResumenSesionComponent;
  let fixture: ComponentFixture<ResumenSesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumenSesionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumenSesionComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    const expectedDetalleSesion = new DetalleSesion(1, '2022-05-03', '8', 'PENDIENTE', '');
    component.sesion = expectedDetalleSesion;
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('should create con sesion pendiente', () => {
    const expectedDetalleSesion = new DetalleSesion(1, '2022-05-03', '8', 'PENDIENTE', '');
    component.sesion = expectedDetalleSesion;
    fixture.detectChanges();

    expect(component.claseEstado).toBe('alert alert-warning');
  });

  it('should create con sesion cumplida', () => {
    const expectedDetalleSesion = new DetalleSesion(1, '2022-05-03', '8', 'CUMPLIDA', '');
    component.sesion = expectedDetalleSesion;
    fixture.detectChanges();
    expect(component.claseEstado).toBe('alert alert-success');
  });
});
