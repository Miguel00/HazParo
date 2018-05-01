import { Component, OnInit, Input, NgModule } from '@angular/core';
import { UserCreate } from '../../services/user.service';
import { Login } from '../../models/login.model';
import swal from 'sweetalert2'
import { SweetAlertService } from '../../services/sweet-alert.service';
import { NgForm, NgModel } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NgIf } from '@angular/common';



@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
})
export class FrontComponent {
  alert: SweetAlertService;
  // login: Array<Login>
  constructor(private _users: UserCreate) { 
    this.alert = new SweetAlertService();
  }

  dataLogin = {
    "username":"",
    "password":""
  }
  name: string;
  invalid: string;
  loginValid = true;
  loginForm(myForm){
    this.dataLogin.username = myForm.value.username;
    this.dataLogin.password = myForm.value.password;
    this.login();
  }

  login(){
    console.log(this.dataLogin);
    this._users.loginUser(this.dataLogin).subscribe(
      (response) => {
        this.infoUser(response.userId);
        this.loginValid = false;
      },
      err => {
        this.invalid = 'Estas credenciales no coinciden con nuestros registros.';
      }
    )
  }
  infoUser(id){
    this._users.infoUser(id).subscribe(
      (response) => {
        console.log(response);
        this.name = response.realm;
        this.alert.succesMessage("Hola", this.name) ;
      },
      err => {
        console.log(err);
      }
    )
  }
  


}
