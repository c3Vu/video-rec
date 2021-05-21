import {Component, OnDestroy, OnInit} from '@angular/core';
import {Video} from '../../../interfaces/videos.interface';
import {VideosService} from '../../../services/videos.service';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrls: ['./space.component.less']
})
export class SpaceComponent implements OnInit, OnDestroy {
  likes: Video[] = [];
  loadingLikes = true;
  history: Video[] = [];
  loadingHistory = true;
  recommend: Video[] = [];
  loadingRecommend = true;

  constructor(
    private videoService: VideosService,
    private userService: UserService
  ) { }

  fetchRecommend(): void {
    this.videoService.getRecommendVideo().subscribe(list => {
      this.recommend = [];
      let count = 0;
      if (list.length === 0) {
        setTimeout(() => {
          this.fetchRecommend();
        }, 2000);
      } else {
        list.forEach((obj: any) => {
          this.videoService.getVideoDetail(obj.id).subscribe({
            next: () => {
              this.recommend.push(obj);
              count = count + 1;
              if (count >= list.length) {
                this.loadingRecommend = false;
              }
            },
            error: msg => {
              count = count + 1;
              if (count >= list.length) {
                this.loadingRecommend = false;
              }
            }
          });
        });
        this.loadingRecommend = false;
      }
    });
  }

  ngOnInit(): void {
    this.videoService.getLikeVideo().subscribe(list => {
      this.loadingLikes = false;
      this.likes = list;
    });
    this.videoService.getHistoryVideo().subscribe(list => {
      this.history = list;
      this.loadingHistory = false;
    });
    this.fetchRecommend();
  }

  ngOnDestroy(): void {
  }
}
