import { RouterModule, Routes, CanActivate } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { FrontComponent } from './components/front/front.component';
import { InfuserComponent } from './components/infuser/infuser.component';
import { PassengersComponent } from './components/passengers/passengers.component';
import { PasajeroComponent } from './components/pasajero/pasajero.component';

const APP_ROUTES: Routes = [
    
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: 'login', component: LoginComponent },
    { path: 'signin', component: FrontComponent },
    { path: 'infouser', component: InfuserComponent },
    { path: 'home', component: PassengersComponent },
    { path: 'home2', component: PasajeroComponent },
 
];
  
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);