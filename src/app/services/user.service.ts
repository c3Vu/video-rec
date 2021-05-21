import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Preference, User} from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userName: string = localStorage.getItem('username') || 'test-user';
  userStatus$ = new Subject<User>();

  constructor(private http: HttpClient) {
  }
  init(): void {
    this.userStatus$.next({username: this.userName});
  }
  login(): void {
    this.userName = 'test-user';
    localStorage.setItem('username', 'test-user');
    this.userStatus$.next({username: 'test-user'});
  }
  logout(): void {
    setTimeout(() => {
      this.userName = '';
      this.userStatus$.next({});
      localStorage.setItem('username', '');
    }, 500);
  }
  editPassword(password: string): void {
    // this.http.
    console.log(password);
  }
  updatePreference(preference: Preference): void {
    console.log(preference);
  }
}
