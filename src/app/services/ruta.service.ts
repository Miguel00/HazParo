import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Ruta } from '../models/ruta.model';
import 'rxjs/add/operator/map';
// import { environment } from '../enviroments/envirotment';

@Injectable()
export class UserCreate {
    rutas: Array<Ruta> =[];
    constructor (private _http: Http){

    }

    getUser(): Observable<Array<Ruta>> {
        const url = 'http://ec2-13-58-37-36.us-east-2.compute.amazonaws.com:3000/api/ruta';
        return this. _http.get(url).map((response) => {
            return response.json();
        });
    }

    postUser(newRuta): Observable<Array<Ruta>> {
        const body = JSON.stringify(newRuta);
        const url = 'http://ec2-13-58-37-36.us-east-2.compute.amazonaws.com:3000/api/ruta';
        return this. _http.post(url,newRuta).map((response) => {
            return response.json();
        });
    }

}