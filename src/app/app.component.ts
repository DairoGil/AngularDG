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
    { url: '/home', nombre: 'Home' },
    { url: '/paciente', nombre: 'Pacientes' },
    { url: '/terapia', nombre: 'Terapias' },
    { url: '/sesion', nombre: 'Sesiones' }
  ];

  
}
