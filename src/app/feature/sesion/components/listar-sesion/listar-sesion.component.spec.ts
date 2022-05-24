import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSesionComponent } from './listar-sesion.component';

describe('ListarSesionComponent', () => {
  let component: ListarSesionComponent;
  let fixture: ComponentFixture<ListarSesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarSesionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
