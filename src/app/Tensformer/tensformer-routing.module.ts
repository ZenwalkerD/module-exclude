import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TensHomeComponent } from './tensformer-home/tens-home.component';
import { environment } from 'src/environments/environment';


const routes: Routes = [
  {
    path: '', component: TensHomeComponent,
  },
  ...environment.modules
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TensformerRoutingModule {
  constructor() {
    console.log(routes);
  }
}
