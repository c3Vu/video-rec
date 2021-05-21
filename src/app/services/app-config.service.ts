import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  readonly baseUrl = 'https://455ca2usdg.execute-api.us-east-1.amazonaws.com/dev';
  readonly behaviors = {
    enter: 'history',
    like: 'UserLiked'
  };
}
