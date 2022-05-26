import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { SesionService } from '@sesion/shared/service/sesion.service';
import { SharedModule } from '@shared/shared.module';

import { AgendarSesionComponent } from './agendar-sesion.component';

describe('AgendarSesionComponent', () => {
  let component: AgendarSesionComponent;
  let fixture: ComponentFixture<AgendarSesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendarSesionComponent ],
      imports: [ HttpClientTestingModule, SharedModule ],
      providers: [ HttpService, SesionService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendarSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
