import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicioVentasRoutingModule } from './servicio-ventas-routing.module';
import { IndexComponent } from './index/index.component';


@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    ServicioVentasRoutingModule
  ]
})
export class ServicioVentasModule { }
