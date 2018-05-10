import { Component, OnInit } from '@angular/core';
import { UserCreate } from '../../services/user.service';

@Component({
  selector: 'app-detailuser',
  templateUrl: './detailuser.component.html',
  styleUrls: ['./detailuser.component.css']
})
export class DetailuserComponent implements OnInit {

  constructor(private _users: UserCreate) { }

  ngOnInit() {
  }
  detailUser = {
    nombre: '',
    apellidos: '',
    genero: '',
    fecha_nacimiento: '2018-05-10T17:11:38.612Z',
    telefono: '',
    tipo_horario: '',
    userId: ''
  }
  detalle(myForm){
    this.detailUser.nombre = myForm.value.nombre
    this.detailUser.apellidos = myForm.value.apellidos
    this.detailUser.genero =  myForm.value.genero
    this.detailUser.telefono =  myForm.value.telefono
    this.detailUser.tipo_horario =  myForm.value.horario
    this.detailUser.userId = localStorage.getItem("id");
    console.log(localStorage.getItem("id"));
    this._users.detalles(this.detailUser).subscribe(
      (response) => {
        console.log(response);
        localStorage.setItem("DetId", response.id);
        location.href="/conductor"
      },
      err => {
        console.log(err);
      },
    )}
}
