import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumenSesionComponent } from './components/resumen-sesion/resumen-sesion.component';
import { ListarSesionComponent } from './components/listar-sesion/listar-sesion.component';
import { SharedModule } from '@shared/shared.module';
import { SesionComponent } from './components/sesion/sesion.component';
import { SesionRoutingModule } from './sesion-routing.module';
import { SesionService } from './shared/service/sesion.service';
import { AgendarSesionComponent } from './components/agendar-sesion/agendar-sesion.component';


@NgModule({
  declarations: [
    ResumenSesionComponent,
    ListarSesionComponent,
    SesionComponent,
    AgendarSesionComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SesionRoutingModule
  ],
  providers: [SesionService]
})
export class SesionModule { }
