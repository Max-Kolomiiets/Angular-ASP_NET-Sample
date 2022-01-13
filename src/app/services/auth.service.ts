import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  authUser(user: any) {
    let userArr: Array<any> = [];

    if (localStorage.getItem('Users')) {
      userArr = JSON.parse(localStorage.getItem('Users') || '{}');
      console.log(userArr);
    }
    return userArr.find(p => p.userName === user.userName && p.password === user.password);
  }
}
