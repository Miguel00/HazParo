import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FrontComponent } from './components/front/front.component';
import { environment } from './environments/environment';
import { RouterModule, Routes } from '@angular/router';

import { UserCreate } from './services/user.service';
import { GeolocationService } from './services/geolocation.service';
import { LoginComponent } from './components/login/login.component';
import { APP_ROUTING } from './app.routing';

import { FormsModule, FormGroup, ReactiveFormsModule, FormControl } from '@angular/forms';
import { InfuserComponent } from './components/infuser/infuser.component';

import { AgmCoreModule } from "@agm/core";

import { ConductorComponent } from './components/conductor/conductor.component';
import { GoogleMapsAPIWrapper } from '@agm/core';
import { DirectionsMapDirective } from './components/conductor/directiva/google-map.directive';
import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';





@NgModule({
  declarations: [
    AppComponent,
    FrontComponent,
    LoginComponent,
    InfuserComponent,
    ConductorComponent,
    DirectionsMapDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
    CommonModule,
    APP_ROUTING,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBF0igbZRNeFIQCfkwH_T__Wpqh6xdQjq4',
      libraries: ["places"]
    })
  ],
  providers: [
    UserCreate,
    GeolocationService,
    GoogleMapsAPIWrapper
  ],
  bootstrap: [AppComponent],
  schemas:  [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class AppModule { }
