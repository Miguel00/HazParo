import { RouterModule, Routes, CanActivate } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { FrontComponent } from './components/front/front.component';

const APP_ROUTES: Routes = [
    
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: 'login', component: LoginComponent },
    { path: 'signin', component: FrontComponent },
 
];
  
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);