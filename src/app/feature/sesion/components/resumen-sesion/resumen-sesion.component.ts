import { Component, OnInit, Input } from '@angular/core';
import { DetalleSesion } from '../../shared/model/detalleSesion';
import { SesionService } from '../../shared/service/sesion.service';

@Component({
  selector: 'app-resumen-sesion',
  templateUrl: './resumen-sesion.component.html',
  styleUrls: ['./resumen-sesion.component.css']
})
export class ResumenSesionComponent implements OnInit {

  constructor(protected sesionService: SesionService) { }

  @Input()
  sesion: DetalleSesion;

  ngOnInit(): void {
  }

}
