import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowFeatureComponent } from './show-feature/show-feature.component';


const routes: Routes = [{
  path: '', component: ShowFeatureComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
