import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  email: string;
  role: 'ADMIN' | 'EMPLOYEE';
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:8080/api/auth'; // you can change later

  constructor(private http: HttpClient) {}

  // UPDATED login method (3 params)
  login(email: string, password: string, role: string): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/login`, {
      email,
      password,
      role
    });
  }
}