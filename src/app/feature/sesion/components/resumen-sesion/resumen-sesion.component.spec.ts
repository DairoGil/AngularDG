import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { DetalleSesion } from '../../shared/model/detalleSesion'

import { ResumenSesionComponent } from './resumen-sesion.component';

describe('ResumenSesionComponent', () => {
  let component: ResumenSesionComponent;
  let fixture: ComponentFixture<ResumenSesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumenSesionComponent ],
      imports: [HttpClientTestingModule],
      providers: [HttpService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumenSesionComponent);
    component = fixture.componentInstance;

    let expectedDetalleSesion = new DetalleSesion(1, '2022-05-03',8, 'PENDIENTE','');
    component.sesion = expectedDetalleSesion;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
