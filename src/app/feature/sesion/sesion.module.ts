import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumenSesionComponent } from './components/resumen-sesion/resumen-sesion.component';
import { ListarSesionComponent } from './components/listar-sesion/listar-sesion.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    ResumenSesionComponent,
    ListarSesionComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class SesionModule { }
