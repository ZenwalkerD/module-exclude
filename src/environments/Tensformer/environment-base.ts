import { LoginComponent } from 'src/app/login/login.component';

export const tensformerBase = {
  routes: [
    { path: '', component: LoginComponent },
    { path: 'home', loadChildren: './Tensformer/tensformer.module#TensformerModule' }
  ],
  modules: [
    { path: 'feature', loadChildren: '../feature/feature.module#FeatureModule' }
  ]
};
