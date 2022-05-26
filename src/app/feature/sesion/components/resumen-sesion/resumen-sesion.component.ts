import { Component, OnInit, Input } from '@angular/core';
import { DetalleSesion } from '../../shared/model/detalleSesion';

@Component({
  selector: 'app-resumen-sesion',
  templateUrl: './resumen-sesion.component.html',
  styleUrls: ['./resumen-sesion.component.css']
})
export class ResumenSesionComponent implements OnInit {

  constructor() { }

  @Input()
  sesion: DetalleSesion;

  ngOnInit(): void {
  }

}
