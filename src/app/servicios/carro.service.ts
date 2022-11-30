import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carro } from '../modelos/carro';

@Injectable({
  providedIn: 'root'
})
export class CarroService {

  url: string = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  obtenerCarros(): Observable<Carro[]> {
    return this.http.get<Carro[]>(`${this.url}/carros`);
  }
}
