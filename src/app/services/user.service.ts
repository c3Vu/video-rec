import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Preference, User} from '../interfaces/user.interface';
import {AppConfigService} from './app-config.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User = {};
  user$ = new Subject<User>();

  constructor(
    private http: HttpClient,
    private appConfigService: AppConfigService
  ) {
    this.user$.subscribe(user => {
      this.user = user;
      localStorage.setItem('user', JSON.stringify(user));
    });
    this.user$.next(JSON.parse(localStorage.getItem('user') || '{}'));
  }

  register(user: User): Observable<any> {
    return this.http.post(this.appConfigService.baseUrl + '/users/register', {
      ...user
    });
  }
  login(user: User): Observable<any> {
    return this.http.post(this.appConfigService.baseUrl + '/users/login', {
      ...user
    });
  }
  logout(): void {
    setTimeout(() => {
      this.user$.next({});
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
