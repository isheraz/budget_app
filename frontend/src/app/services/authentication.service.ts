import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    return this.http.post('http://localhost:3000/api/auth/login', {email, password}).pipe(
      map((data: any) => {
        const token = data.access_token;
        localStorage.setItem('access_token', token);
        return token;
      })
    );
  }

  register(user: any) {

  }

}
