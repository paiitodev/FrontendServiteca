import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './plantilla/error/error.component';
import { InicioComponent } from './plantilla/inicio/inicio.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: '', pathMatch: 'full', redirectTo: '/inicio' },
  {path: 'seguridad',loadChildren: () =>
  import('./modulos/seguridad/seguridad.module').then(
        (x) => x.SeguridadModule),},
  {path: 'administradores',loadChildren: () =>
  import('./modulos/administradores/administradores.module').then(
        (x) => x.AdministradoresModule),},
  {path: 'clientes',loadChildren: () =>
  import('./modulos/clientes/clientes.module').then(
        (x) => x.ClientesModule),},
  {path: 'carros',loadChildren: () =>
  import('./modulos/carros/carros.module').then(
        (x) => x.CarrosModule),},
  {path: 'servicios',loadChildren: () =>
  import('./modulos/servicios/servicios.module').then(
        (x) => x.ServiciosModule),},
  {path: 'servicio-ventas',loadChildren: () =>
  import('./modulos/servicio-ventas/servicio-ventas.module').then(
        (x) => x.ServicioVentasModule),},
  {path: '**', component: ErrorComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
