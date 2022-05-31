import { Component } from '@angular/core';
import { MenuItem } from '@core/modelo/menu-item';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-base';
  public itemsServicios: MenuItem[] = [
    { url: '/home', nombre: 'Inicio', icono: './assets/iconos/homeicono.ico'},
    { url: '/paciente', nombre: 'Pacientes', icono: './assets/iconos/user.ico' },
    { url: '/terapia', nombre: 'Terapias', icono: './assets/iconos/terapiav2.ico' },
    { url: '/sesion', nombre: 'Sesiones', icono: './assets/iconos/agenda.ico'}
  ];
}
