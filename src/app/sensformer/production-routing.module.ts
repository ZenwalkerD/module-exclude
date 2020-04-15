import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SensHomeComponent } from './sens-home/sens-home.component';


const routes: Routes = [
  {
    path: '', component: SensHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductionRoutingModule { }
