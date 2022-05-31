import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacienteComponent } from './components/paciente/paciente.component';
import { SharedModule } from '@shared/shared.module';
import { PacienteService } from './shared/service/paciente.service';
import { PacienteRoutingModule } from './PacienteRoutingModule.module';
import { RegistrarPacienteComponent } from './components/registrar-paciente/registrar-paciente.component';

@NgModule({
  declarations: [
    PacienteComponent,
    RegistrarPacienteComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PacienteRoutingModule
  ],
  providers: [PacienteService]
})
export class PacienteModule { }
