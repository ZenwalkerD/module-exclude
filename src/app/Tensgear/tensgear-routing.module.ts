import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TensgearHomeComponent } from './tensgear-home/tensgear-home.component';


const routes: Routes = [
  {
    path: '', component: TensgearHomeComponent//loadChildren: '../status-header/status-header.module#StatusHeaderModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TensgearRoutingModule { }
