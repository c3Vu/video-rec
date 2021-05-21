import {Injectable} from '@angular/core';
import {AppConfigService} from './app-config.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {Video, Videos} from '../interfaces/videos.interface';
import {UserService} from './user.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VideosService {
  likes$ = new Subject<Array<number>>();

  constructor(
    private appConfigService: AppConfigService,
    private userService: UserService,
    private http: HttpClient
  ) {
  }

  getVideosDefault(limit: string, offset: string): Observable<Array<Video>> {
    // @ts-ignore
    return this.http.get(this.appConfigService.baseUrl + '/movie/default', {
      params: {
        limit,
        offset
      }
    });
  }

  getVideosSearch(searchby: string, value: string): Observable<Array<Video>> {
    // @ts-ignore
    return this.http.get(this.appConfigService.baseUrl + '/movie/search', {
      params: {
        searchby,
        value
      }
    });
  }

  getVideoDetail(id: string): Observable<Video> {
    return this.http.get(this.appConfigService.baseUrl + '/movie/' + id);
  }

  getLikeVideo(uid: string): Observable<any> {
    return this.http.get(this.appConfigService.baseUrl + '/users/history', {
      params: {
        uid,
        behavior: this.appConfigService.behaviors.like
      }
    });
  }

  getLikeVideoId(uid: string): void {
    this.getLikeVideo(uid).pipe(map((list) =>
        (list as Array<Video>)
          .filter(ele => ele.id !== undefined)
          .map(ele => ele.id || 0)))
      .subscribe(
        o => this.likes$.next(o)
      );
  }

  postLikeVideo(uid: string, mid: string): Observable<any> {
    return this.http.post(this.appConfigService.baseUrl + '/users/history', {
      behavior: this.appConfigService.behaviors.like,
      uid,
      mid
    }, { });
  }

  getHistoryVideo(uid: string): Observable<any> {
    return this.http.get(this.appConfigService.baseUrl + '/users/history', {
      params: {
        uid,
        behavior: this.appConfigService.behaviors.enter
      }
    });
  }

  postHistoryVideo(uid: string, mid: string): Observable<any> {
    return this.http.post(this.appConfigService.baseUrl + '/users/history', {
      behavior: this.appConfigService.behaviors.enter,
      uid,
      mid
    }, { });
  }

  getRecommendVideo(uid: string): Observable<any> {
    return this.http.get(this.appConfigService.baseUrl + '/recommend/' + uid);
  }
}
