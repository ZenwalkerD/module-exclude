import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatusHeaderRoutingModule } from './status-header-routing.module';
import { InfoPanelComponent } from './info-panel/info-panel.component';


@NgModule({
  declarations: [InfoPanelComponent],
  imports: [
    CommonModule,
    StatusHeaderRoutingModule
  ]
})
export class StatusHeaderModule { }
