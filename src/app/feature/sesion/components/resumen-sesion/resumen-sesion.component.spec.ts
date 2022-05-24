import { ComponentFixture, TestBed } from '@angular/core/testing';

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
