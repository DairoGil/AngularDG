import { Component, OnInit } from '@angular/core';
import { TrmService } from '@core/services/trm.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  moneda: number;

  constructor(protected trmService: TrmService) { }

  ngOnInit() {
    this.consultar();
  }

  consultar() {
    this.trmService.obtenerDolar().subscribe(
      data => {
        this.moneda = data[0].valor;
    });
  }
}
