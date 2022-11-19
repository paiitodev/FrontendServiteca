import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/modelos/cliente';
import { ClienteService } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
clientes: Cliente[] = [];
constructor(private clienteServicio: ClienteService) { }
  ngOnInit(): void {
    this.clienteServicio.obtenerClientes().subscribe(clientes => this.clientes = clientes);
  }

}
