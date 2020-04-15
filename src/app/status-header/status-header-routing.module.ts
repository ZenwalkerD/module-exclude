import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoPanelComponent } from './info-panel/info-panel.component';


const routes: Routes = [
  {
    path: '', component: InfoPanelComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatusHeaderRoutingModule { }
