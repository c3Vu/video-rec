import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {filter, map} from 'rxjs/operators';
import {Video} from '../../../interfaces/videos.interface';
import {VideosService} from '../../../services/videos.service';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.less']
})
export class DetailComponent implements OnInit {
  detail: Video = {};
  loading = true;
  liked = false;

  constructor(
    private route: ActivatedRoute,
    private videoService: VideosService,
    public userService: UserService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.pipe(
      filter(o => o.id),
      map(o => o.id)
    ).subscribe(id => {
      this.videoService.postHistoryVideo(id).subscribe();
      this.videoService.getVideoDetail(id).subscribe(o => {
        this.detail = o;
        this.loading = false;
        this.videoService.likes$.subscribe((ids) => {
          this.liked = ids.indexOf(this.detail.id || 0) >= 0;
        });
        this.videoService.getLikeVideoId();
      });

    });
  }

  handleClick(): void {
    this.videoService.postLikeVideo((this.detail.id || '').toString()).subscribe(
      () => this.liked = true
    );
  }

}
