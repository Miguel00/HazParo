import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule }from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { FrontComponent } from './components/front/front.component';
import { environment } from './environments/environment';
import { RouterModule, Routes } from '@angular/router';

import { UserCreate } from './services/user.service';
import { LoginComponent } from './components/login/login.component';
import { APP_ROUTING } from './app.routing';0

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfuserComponent } from './components/infuser/infuser.component';
import { PasajerosComponent } from './pasajeros/pasajeros.component';
import { PassengersComponent } from './components/passengers/passengers.component';
import { HomeComponent } from './home/home.component';
import { NgbdDatepickerBasic } from './datepicker-basic';
import { PasajeroComponent } from './components/pasajero/pasajero.component';
@NgModule({
  declarations: [
    AppComponent,
    FrontComponent,
    LoginComponent,
    InfuserComponent,
    PasajerosComponent,
    PassengersComponent,
    HomeComponent,
    NgbdDatepickerBasic,
    PasajeroComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    APP_ROUTING,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot(),
  ],
  providers: [
    UserCreate
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
