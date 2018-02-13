import { Component, OnInit } from '@angular/core';
import { UserCreate } from '../../services/user.service';
import { Users } from '../../models/users.model';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
})
export class FrontComponent implements OnInit {
  users: Array<Users>
  constructor(private _users: UserCreate) { }

  ngOnInit() {
    this._users.getUser().subscribe(
      (response: Users[]) => {
        this.users = response;
      },
      err => {
        console.log(err)
      }
    )
  }

}
