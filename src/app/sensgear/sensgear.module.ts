import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SensgearRoutingModule } from './sensgear-routing.module';
import { DevHomeComponent } from './dev-home/dev-home.component';
import { StatusHeaderModule } from '../status-header/status-header.module';


@NgModule({
  declarations: [DevHomeComponent],
  imports: [
    CommonModule,
    SensgearRoutingModule,
    StatusHeaderModule
  ]
})
export class SensgearModule { }
