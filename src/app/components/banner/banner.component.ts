import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {filter, map} from 'rxjs/operators';
import {UserService} from '../../services/user.service';
import {User} from '../../interfaces/user.interface';

const pageMap = {
  '/videos/explore': 'EXPLORE',
  MY_SPACE: '/videos/my',
  LOGIN: '/user/login',
  REGISTER: '/user/register',
  NOTHING: '',
};

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BannerComponent implements OnInit {
  current = '';
  user: User = {};

  constructor(
    private router: Router,
    private cdr: ChangeDetectorRef,
    private userService: UserService
  ) {}

  logout(): void {
    this.userService.logout();
  }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      map(o => (o as NavigationEnd).urlAfterRedirects)
    ).subscribe(url => {
      this.current = url;
      this.cdr.markForCheck();
    });
    this.userService.userStatus$.subscribe(o => {
      this.user = o;
      this.cdr.markForCheck();
      console.log(o);
    });
    this.userService.init();
  }

}
