import { Component, OnInit } from '@angular/core';
import { Carro } from 'src/app/modelos/carro';
import { CarroService } from 'src/app/servicios/carro.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  carros: Carro[] = [];

  constructor(private carroServicio: CarroService) { }

  ngOnInit(): void {
    this.carroServicio.obtenerCarros().subscribe(carros => this.carros = carros);
    this.cargarCarros();
  }

  cargarCarros() {
    this.carroServicio.obtenerCarros()
      .subscribe(carros => this.carros = carros);
  }

}
