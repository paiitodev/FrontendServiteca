import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Servicio } from 'src/app/modelos/servicio';
import { ClienteService } from 'src/app/servicios/cliente.service';
import { ServicioService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  fgValidator: FormGroup = this.fb.group({
    codigo: ['', [Validators.required]],
    nombre: ['', [Validators.required]],
    precio: ['', [Validators.required]]
  });

  constructor(
    private fb: FormBuilder,
    private servicioServicio: ServicioService,
    private router: Router) { }

  ngOnInit(): void {
  }

  crearServicio() {
    let servicio = new Servicio();
    servicio.codigo = this.fgValidator.controls["codigo"].value;
    servicio.nombre = this.fgValidator.controls["nombre"].value;
    servicio.precio = parseInt(this.fgValidator.controls["precio"].value);
    this.servicioServicio.crearServicio(servicio).subscribe({
      next: (servicio) => {
        alert("Servicio almacenado");
        this.router.navigate(["/servicios"]);
      },
      error: (error) => { alert("error almacenando el servicio"); }
    })
  }

}
