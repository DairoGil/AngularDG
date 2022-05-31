import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacienteComponent } from './components/paciente/paciente.component';
import { RegistrarPacienteComponent } from './components/registrar-paciente/registrar-paciente.component';

const routes: Routes = [
    {
        path: '',
        component: PacienteComponent,
        children: [
            {
              path: 'registrar',
              component: RegistrarPacienteComponent
            }
          ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PacienteRoutingModule { }
