import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarrosRoutingModule } from './carros-routing.module';
import { IndexComponent } from './index/index.component';


@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    CarrosRoutingModule
  ]
})
export class CarrosModule { }
