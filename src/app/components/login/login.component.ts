import { Component, OnInit, NgZone } from '@angular/core';
import { UserCreate } from '../../services/user.service';
import { Users } from '../../models/users.model';
import swal from 'sweetalert2'
import { SweetAlertService } from '../../services/sweet-alert.service';


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
  };

  newUser = {
    'type': 'P',
    'realm': 'string',
    'username':  '',
    'email':  '',
    'password': '',
  }
  mail = {
    receiver: '',
    msg: ''
  }
  alert: SweetAlertService;
  email: string;
  isValid: boolean;
  emailValid: string;
  caracteres = "0123456789abcdefABCDEF?¿¡!:;";
  longitud = 20;
  users: Array<Users>
  emailUser;

  constructor(ngZone: NgZone, private _users: UserCreate) {
    this.alert = new SweetAlertService();
    window['onSignIn'] = (user) => ngZone.run(() => this.onSignIn(user));
    
  }

  onSignIn(googleUser):void {
    var profile = googleUser.getBasicProfile();
    this.userData.id = profile.getId(); 
    this.userData.name = profile.getName();
    this.userData.image  = profile.getImageUrl();
    this.userData.email = profile.getEmail();
    this.emailUser = profile.getEmail();
    this.validationEmail();
    console.log(googleUser.getBasicProfile());
  }

  validationEmail(){
    if (this.userData.email.includes("@ucaribe.edu.mx")){
      this.createUser();
      // this.getUser();
    }
    else{
    const temp = 'Esta aplicacion esta disponible solo para estudiantes de la Universidad del Caribe.';
    this.alert.infoEmail('', temp);
    }
  }

  getUser(){
    this._users.getUser().subscribe(
      (response: Users[]) => {
        this.users = response;
      },
      err => {
        console.log(err)
      }
    )
  }
  sendMail(){
    this._users.sendEmail(this.mail).subscribe(
      (response) => {
        console.log(response)
      }
    )
  }
  createUser(){
    let name = this.userData.email.replace("@ucaribe.edu.mx","");
    this.newUser.username = name;
    this.newUser.email = this.userData.email;
    this.newUser.realm = this.userData.name ;
    console.log(this.randomPassword(this.caracteres, this.longitud));
    this.newUser.password = this.randomPassword(this.caracteres, this.longitud);
    console.log(this.newUser);
    this.mail.receiver = this.userData.email;
    this.mail.msg = this.newUser.password;
    this._users.postUser(this.newUser).subscribe(
      (response) => {
        this.sendMail();
        const finalMessage = `
        <span style="font-weight:bold;"><span >Resiva tu correo para continuar con el registro</span></span><br><br>
        <span style="color:#007bff;">Usuario: <span style="color:black;">${this.newUser.username}</span></span><br>
        <span style="color:#007bff;">Password: <span style="color:black;">${this.newUser.password}</span></span>
      </div>`
        this.alert.infoTemplate('Usuario creado', finalMessage);
      },
      err => {
        this.sweetAlert();
      }
    )
  }

  randomPassword(chars, lon){
    let code = "";
    for (let x=0; x < lon; x++)
    {
    const rand = Math.floor(Math.random()*chars.length);
    code +=  chars.substr(rand, 1);
    }
    return code;
  }
  sweetAlert(){
    const temp = 'El Correo ya ha sido utilizado';
    this.alert.infoEmail('E-mail', temp);
  }
}
