import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../modelos/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  
  url: string = "http://localhost:3000";
  constructor(private http: HttpClient) { }
  obtenerClientes(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(`${this.url}/clientes`);
    }
    crearCliente(cliente: Cliente):Observable<Cliente>{
return this.http.post<Cliente>(`${this.url}/clientes`,
cliente);
}
}
