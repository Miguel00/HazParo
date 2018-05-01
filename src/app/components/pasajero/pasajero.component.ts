import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
//import { Injectable } from '@angular/core';
//import { Hero }    from './hero';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-pasajero',
  templateUrl: './pasajero.component.html',
  styleUrls: ['./pasajero.component.css']
})
export class PasajeroComponent {
  constructor(private http:HttpClient ){

  }
  cityName='';
  lolazo='';
  //Citybullshit='';
  powers = ['Any', 'Feminazi', 'Weather Changer'];
  model = this.powers[0];

  bullshit = {
    "city":"",
    "Horario":""
  }

  searchCity(){
    
    this.http.get('http://localhost:3004/pets/2')
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
  

}

