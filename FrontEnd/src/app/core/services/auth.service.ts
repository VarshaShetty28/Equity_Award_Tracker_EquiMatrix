import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface User {
  email: string;
  role: 'ADMIN' | 'EMPLOYEE';
}

@Injectable({
  providedIn: 'root' //Singleton
})
export class AuthService {

  login(email: string, password: string): Observable<User> {

    // MOCK (replace with API later)
    if (email === 'admin@gmail.com') {
      return of({ email, role: 'ADMIN' });
    }
    return of({ email, role: 'EMPLOYEE' });
  }
}