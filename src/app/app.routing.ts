import { RouterModule, Routes, CanActivate } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { FrontComponent } from './components/front/front.component';
import { InfuserComponent } from './components/infuser/infuser.component';
import { ConductorComponent } from './components/conductor/conductor.component';
import { PassengersComponent } from './components/passengers/passengers.component';
import { DetailuserComponent } from './components/detailuser/detailuser.component';


const APP_ROUTES: Routes = [
    
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: 'login', component: LoginComponent },
    { path: 'signin', component: FrontComponent },
    { path: 'infouser', component: InfuserComponent },
    { path: 'conductor', component: ConductorComponent },
    { path: 'pasajero', component: PassengersComponent },
    { path: 'detalles', component: DetailuserComponent },
 
];
  
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);