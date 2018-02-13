import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Users } from '../models/users.model';
import 'rxjs/add/operator/map';
// import { environment } from '../enviroments/envirotment';

@Injectable()
export class UserCreate {
    users: Array<Users> =[];
    constructor (private _http: Http){

    }

    getUser(): Observable<Array<Users>> {
        const url = 'url';
        return this. _http.get(url).map((response) => {
            console.log(response);
            return response.json();
        });
    }

    postUser(): Observable<Array<Users>> {
        const url = 'url';
        return this. _http.get(url).map((response) => {
            console.log(response);
            return response.json();
        });
    }

    // postUser(){
    //     const url = 'url';
    //     this. _http.post(url, url).subscribe(
    //         // (response: any) => {
    //         //   const result = { success: false, message: 'Fail', userId: null };
    //         //     const subject = new Subject<any>();
    //         //     console.log(response);

    //         //     subject.next(result);
    //         // }  
    //     );
    // }

}