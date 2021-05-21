import { Component, OnInit } from '@angular/core';
import {Video} from '../../../interfaces/videos.interface';
import {VideosService} from '../../../services/videos.service';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrls: ['./space.component.less']
})
export class SpaceComponent implements OnInit {
  likes: Video[] = [];
  history: Video[] = [];
  recommend: Video[] = [];

  constructor(
    private videoService: VideosService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.videoService.getLikeVideo(this.userService.userName).subscribe(list => {
      this.likes = list;
    });
    this.videoService.getHistoryVideo(this.userService.userName).subscribe(list => {
      this.history = list;
    });
    this.videoService.getRecommendVideo(this.userService.userName).subscribe(list => {
      this.recommend = list;
    });
  }

}
