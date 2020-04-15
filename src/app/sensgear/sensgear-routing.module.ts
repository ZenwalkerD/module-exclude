import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevHomeComponent } from './dev-home/dev-home.component';
import { InfoPanelComponent } from '../status-header/info-panel/info-panel.component';


const routes: Routes = [
  {
    path: '', component: DevHomeComponent, loadChildren: '../status-header/status-header.module#StatusHeaderModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SensgearRoutingModule { }
