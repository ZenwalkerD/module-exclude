import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TensHomeComponent } from './tensformer-home/tens-home.component';


const routes: Routes = [
  {
    path: '', component: TensHomeComponent,
    children: [{ path: 'feature', loadChildren: '../feature/feature.module#FeatureModule' }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TensformerRoutingModule { }
