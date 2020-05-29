import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TensformerRoutingModule } from './tensformer-routing.module';
import { TensHomeComponent } from './tensformer-home/tens-home.component';


@NgModule({
  declarations: [TensHomeComponent],
  imports: [
    CommonModule,
    TensformerRoutingModule
  ]
})
export class TensformerModule { }
