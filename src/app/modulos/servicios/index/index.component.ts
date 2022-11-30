import { Component, OnInit } from '@angular/core';
import { Servicio } from 'src/app/modelos/servicio';
import { ServicioService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  servicios: Servicio[] = [];

  constructor(private servicioServicio: ServicioService) { }

  ngOnInit(): void {
    this.servicioServicio.obtenerServicios().subscribe(servicios => this.servicios = servicios);
    this.cargarServicios();
  }

  cargarServicios() {
    this.servicioServicio.obtenerServicios()
      .subscribe(servicios => this.servicios = servicios);
  }

  eliminarServicio(id: any) {
    if (confirm("Desea eliminar este servicio?")) {
      this.servicioServicio.eliminarServicio(id).subscribe({
        next: (any) => {
          alert("servicio eliminado");
          this.cargarServicios();
        },
        error: (error) => { alert("error eliminando el servicio"); }
      })
    }
  }

}
