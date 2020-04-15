import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { environment } from 'src/environments/environment';

const routes: Routes = environment.routes;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
