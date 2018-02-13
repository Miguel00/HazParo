import { Component, OnInit, NgZone } from '@angular/core';
import { UserCreate } from '../../services/user.service';
import { Users } from '../../models/users.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  userData = {
    id: '',
    name: '',
    image: '',
    email: ''
  }

  isValid: boolean;
  emailValid: string;
  users: Array<Users>

  constructor(ngZone: NgZone, private _users: UserCreate) {
    window['onSignIn'] = (user) => ngZone.run(() => this.onSignIn(user));
  }

  onSignIn(googleUser):void {
    var profile = googleUser.getBasicProfile();
    this.userData.id = profile.getId(); 
    this.userData.name = profile.getName();
    this.userData.image  = profile.getImageUrl();
    this.userData.email = profile.getEmail();
    console.log(this.userData);
    this.validationEmail();
  }

  validationEmail(){
    if (this.userData.email.includes("@ucaribe.edu.mx")){
      this.emailValid = 'Correo valido!';
      // location.href = "/signin";
      this.createUser();
    }
    else{
      this.emailValid = 'Esta aplicacion esta disponible solo para estudiantes de la Universidad del Caribe.';
    }
  }

  createUser(){
    this._users.postUser().subscribe(
      (response: Users[]) => {
        this.users = response;
      },
      err => {
        console.log(err)
      }
    )
  }

}
