import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Login } from 'src/app/entities/login/login.namespace';
import { getUrl } from '../helpers/api.helper';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  // needs to be added on LS for prod version
  // there is just for test task
  token: string;

  login(userData: Login.LoginForm): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(getUrl('login'), userData).pipe(
      tap(({ token }) => {
        this.token = token;
      })
    );
  }

  logout(): void {
    this.token = '';
  }
}
