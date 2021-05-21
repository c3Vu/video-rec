import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Video} from '../../interfaces/videos.interface';
import {VideosService} from '../../services/videos.service';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.less']
})
export class VideoComponent implements OnInit, OnChanges {
  @Input() video: Video = {};
  @Input() liked = false;
  @Input() showLike = true;
  currentLiked = false;

  constructor(
    private videosService: VideosService,
    public userService: UserService
  ) { }

  ngOnInit(): void {
    this.currentLiked = this.liked;
  }

  handleClick(): void {
    this.videosService.postLikeVideo((this.video?.id || '').toString()).subscribe(
      () => this.currentLiked = true
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    const {liked} = changes;
    this.currentLiked = liked ? true : false;
  }
}
