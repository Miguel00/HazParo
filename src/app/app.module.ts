import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FrontComponent } from './components/front/front.component';
import { environment } from './environments/environment';
import { RouterModule, Routes } from '@angular/router';

import { UserCreate } from './services/user.service';
import { LoginComponent } from './components/login/login.component';
import { APP_ROUTING } from './app.routing';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    FrontComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    APP_ROUTING,
    FormsModule,
  ],
  providers: [
    UserCreate
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
