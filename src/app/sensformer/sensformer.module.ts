import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductionRoutingModule } from './production-routing.module';
import { SensHomeComponent } from './sens-home/sens-home.component';


@NgModule({
  declarations: [SensHomeComponent],
  imports: [
    CommonModule,
    ProductionRoutingModule
  ]
})
export class SensformerModule { }
