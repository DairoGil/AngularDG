import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendarSesionComponent } from './components/agendar-sesion/agendar-sesion.component';
import { ListarSesionComponent } from './components/listar-sesion/listar-sesion.component';
import { SesionComponent } from './components/sesion/sesion.component';

const routes: Routes = [
  {
    path: '',
    component: SesionComponent,
    children: [
      {
        path: 'listar-pendientes',
        component: ListarSesionComponent
      },
      {
        path: 'agendar',
        component: AgendarSesionComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SesionRoutingModule { }
