import { Injectable } from '@angular/core';

import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: User;
  redirectUrl: string;

  get isLoggedIn(): boolean {
    return !!this.currentUser;
  }


  login(userName: string): void {
    if (userName == 'admin') {
        this.currentUser = {
          id: 1,
          userName: userName,
          isAdmin: true
        };
        return;
  }
}

  logout(): void {
    this.currentUser = null;
  }
}