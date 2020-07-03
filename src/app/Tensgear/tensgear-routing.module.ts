import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TensgearHomeComponent } from './tensgear-home/tensgear-home.component';


const routes: Routes = [
  {
    path: '', component: TensgearHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TensgearRoutingModule { }
