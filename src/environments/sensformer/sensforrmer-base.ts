import { LoginComponent } from 'src/app/login/login.component';
import { SensformerModule } from 'src/app/sensformer/sensformer.module';

export const sensformerBase = {
  routes: [
    { path: '', component: LoginComponent },
    { path: 'home', loadChildren: './sensformer/sensformer.module#SensformerModule' }
  ],
  modules: [SensformerModule]
};
