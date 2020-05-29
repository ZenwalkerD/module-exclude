import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatusHeaderModule } from '../status-header/status-header.module';
import { TensgearHomeComponent } from './tensgear-home/tensgear-home.component';
import { TensgearRoutingModule } from './tensgear-routing.module';


@NgModule({
  declarations: [TensgearHomeComponent],
  imports: [
    CommonModule,
    TensgearRoutingModule,
    StatusHeaderModule
  ]
})
export class TensgearModule { }
