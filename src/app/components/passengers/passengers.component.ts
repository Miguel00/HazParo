import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
//import { Injectable } from '@angular/core';
//import { Hero }    from './hero';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NgbdDatepickerBasic } from '../../datepicker-basic';
import { forEach } from '@angular/router/src/utils/collection';

//const now = new Date();

@Component({
  selector: 'app-passengers',
  templateUrl: './passengers.component.html',
  styleUrls: ['./passengers.component.css']
})
export class PassengersComponent {
  constructor(private http:HttpClient ){

  }

 //cityName={};
 //Citybullshit='';
 fechas = ['equis','hoy','maniana','pasado'];
 horas = ['1:00','2:00','3:00','4:00','5:00','6:00','7:00','8:00','9:00','10:00','11:00','12:00'];
 genders = ['equis','Macho opresor', 'Feminazi'];
 destinos = ['equis','Pa la Uni', 'Pa mi Canton'];
 res;
 model2 = this.horas[0];
 model = this.fechas[0];
 model3= this.genders[0];
 model4 = this.destinos[0];
/*
 peto = {
   "id": "",
   "name": "",
   "gender":""
 }
 */
 //lolazo='';
 bullshit = {
   "Fecha":"",
   "Horario":"",
   "Genero":"",
   "Destino":""
 }
 
 
/*
 searchCity(){
   
   this.http.get('http://localhost:3004/pets')
   //this.http.get('api.openweathermap.org/data/2.5/forecast?APPID=20ddea961cabe84819fc9c2c6d040e12&id=524901'+this.cityName+this.model)
   .subscribe(//res => res
   (res: Response)=> {
   const weatherCity = res.json;
   console.log(res);
   //this.Citybullshit = weatherCity;
   }
   )
   this.bullshit.city = this.cityName;
   this.bullshit.Horario = this.model;
   
 }
 */
busquedaPirata(){
  this.http.get('http://localhost:3004/rutas')
  //this.http.get('http://localhost:3004/pets')
  //this.http.get('api.openweathermap.org/data/2.5/forecast?APPID=20ddea961cabe84819fc9c2c6d040e12&id=524901'+this.cityName+this.model)
  .subscribe(//res => res
  (res: Response)=> {
  //const weatherCity = res.json;
  this.res=res;
  //console.log(res);
  //this.cityName = res;
  //this.Citybullshit = weatherCity;
  
  }
  )
  this.bullshit.Fecha = this.model;
  this.bullshit.Horario = this.model2;
  this.bullshit.Genero = this.model3;
  this.bullshit.Destino = this.model4;

  }
}
