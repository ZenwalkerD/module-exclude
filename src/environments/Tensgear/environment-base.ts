import { LoginComponent } from 'src/app/login/login.component';

export const environmentBase = {
  routes: [
    { path: '', component: LoginComponent },
    { path: 'home', loadChildren: './Tensgear/tensgear.module#TensgearModule' }
  ],
  modules: []
};
