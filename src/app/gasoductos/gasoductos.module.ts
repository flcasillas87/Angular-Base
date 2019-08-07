import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GasoductosRoutingModule } from './gasoductos-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { DescripcionComponent } from './layout/descripcion/descripcion.component';
import { PuntoInyeccionComponent } from './layout/punto-inyeccion/punto-inyeccion.component';
import { PuntoExtraccionComponent } from './layout/punto-extraccion/punto-extraccion.component';
import { CostosComponent } from './layout/costos/costos.component';


@NgModule({
  declarations: [LayoutComponent, DescripcionComponent, PuntoInyeccionComponent, PuntoExtraccionComponent, CostosComponent],
  imports: [
    CommonModule,
    GasoductosRoutingModule
  ]
})
export class GasoductosModule { }
