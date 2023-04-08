import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';
import { UserModelInterface } from '../models/user.model';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css'],
})
export class UserTableComponent implements OnInit {
  name: string = '';
  company: string = '';
  designation: string = '';
  userData!: Observable<UserModelInterface[]>;
  constructor(private _userService: UserService) {}

  ngOnInit(): void {
    this.userData = this._userService.getUserData();
  }
}
