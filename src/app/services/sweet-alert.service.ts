import { Injectable } from '@angular/core';
import swal from 'sweetalert2';

@Injectable()
export class SweetAlertService {

  colorGreenButton = '#7CB546';
  namesweet = '';
  lastNamesweet = '';
  emailsweet = '';



  constructor() { }
  succesMessage(titulo: string, mensaje: string) {
    swal({
      title: titulo,
      text: mensaje,
      type: 'success',
      confirmButtonColor: '#7CB546',
    }).catch(swal.noop);
  }

  infoMessage(titulo: string, mensaje: string) {
    swal({
      title: titulo,
      text: mensaje,
      type: 'info',
      confirmButtonColor: '#7CB546',
    }).catch(swal.noop);
  }

  questionMessage(titulo:string, mensaje:string){
    swal({
      title: titulo,
      text: mensaje,
      confirmButtonColor: '#7CB546',
      type: 'question'
    }).catch(swal.noop);
  }


  warningMessage(titulo:string, mensaje:string){
    swal({
      title: titulo,
      text: mensaje,
      confirmButtonColor: '#7CB546',
      type: 'warning'
    }).catch(swal.noop);
  }

  errorMessage(titulo:string, mensaje:string){
    swal({
      title: titulo,
      text: mensaje,
      timer: 2500,
      confirmButtonColor: this.colorGreenButton,
      type: 'error',
    }).catch(swal.noop);
  }

  templateHTML(title:string, temp:string){
    swal({
      title: title,
      html: temp,
      showCloseButton: false,
      showCancelButton: true,
      focusConfirm: false,
    }).catch(swal.noop);
  }

  templateOnlyHTML(temp:string){
    swal({
      html: temp,
      width: '80%',
      showCloseButton: false,
      showCancelButton: false,
      focusConfirm: false,
    }).catch(swal.noop);
  }

  infoTemplate(titulo: string, temp: string, width:string = '500px') {
    swal({
      title: titulo,
      html: temp,
      width: width,
      confirmButtonColor: this.colorGreenButton,
      type: 'info',
    }).then(function() {
      window.location.href = '/signin';
      });
  }
  infoEmail(titulo: string, temp: string, width:string = '500px') {
    swal({
      title: titulo,
      html: temp,
      width: width,
      confirmButtonColor: this.colorGreenButton,
      type: 'info',
    });
  }

  terms(html) {
    swal({
      html: html,
      showCancelButton: false,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Actualizar'
    }).then(function (html) {
      swal(
        'Actualizado!',
      );
    });
  }

}
