import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Servicio } from '../modelos/servicio';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  url: string = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  obtenerServicios(): Observable<Servicio[]> {
    return this.http.get<Servicio[]>(`${this.url}/servicios`);
  }

  crearServicio(servicio: Servicio):
    Observable<Servicio> {
    return this.http.post<Servicio>(`${this.url}/servicios`, servicio);
  }

}
