import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginUrl = 'http://localhost:1020/login';
  // declare a BehaviorSubject to store username and password value
  userDetails = new BehaviorSubject<Login>({ username: '', password: '' });
  login!: Login;
  loginStatus!: boolean;

  constructor(
    private http: HttpClient
  ) { }

  getLogin(login: Login): Observable<boolean> {
    return this.http.post<Login[]>(this.loginUrl, login).pipe(
      map((data: Login[]) => {
        const users: any = data;
        if (users.message) {
          // update the BehaviorSubject property with username and password value
          this.userDetails.next(login);
          this.loginStatus = true;
        } else {
          this.loginStatus = false;
        }
        return this.loginStatus;
      })
    );
  }
}
