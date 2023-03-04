import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environmen';
import { LoginData } from '../models/login-data.model copy';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
  ) { }

  login(userInfo: LoginData): Observable<any> {
    return this.http.post(environment.apiUrl.concat(environment.loginUrl), userInfo);
  }

  signup(user: User): Observable<any> {
    return this.http.post(environment.apiUrl.concat(environment.signupUrl), user);
  }
}
