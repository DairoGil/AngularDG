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

    const expectedDetalleSesion = new DetalleSesion(1, '2022-05-03', '8', 'PENDIENTE', '');
    component.sesion = expectedDetalleSesion;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
