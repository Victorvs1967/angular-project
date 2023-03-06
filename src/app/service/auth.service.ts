import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environmen';
import { LoginData } from '../models/login-data.model copy';
import { User } from '../models/user.model';
import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token?: string | null;

  constructor(
    private http: HttpClient,
    private jwt: JwtService,
  ) { }

  setToken(token: string): void {
    this.token = JSON.parse(JSON.stringify(token)).token;
    sessionStorage.setItem('token', this.token || '');
  }

  getToken(): string | null {
    return sessionStorage.getItem('token') || null;
  }

  clearToken(): void {
    sessionStorage.removeItem('token');
    this.token = null;
  }

  login(userInfo: LoginData): Observable<any | boolean> {
    return this.http.post(environment.apiUrl.concat(environment.loginUrl), userInfo)
      .pipe(map((token: any) => {
        this.clearToken();
        this.setToken(token);
        return token ? of(true) : of(false);
      }));
  }

  signup(user: User): Observable<any> {
    return this.http.post(environment.apiUrl.concat(environment.signupUrl), user);
  }

  logout(param = true) {
    if (param) {
      this.clearToken();

      setTimeout(() => {}, 500);
      return true;
    }
    return false;
  }
}
