import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {VideosService} from '../../../services/videos.service';
import {Video} from '../../../interfaces/videos.interface';
import {AppConfigService} from '../../../services/app-config.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.less']
})
export class ExploreComponent implements OnInit {
  videos: Array<Video> = [];
  validateForm!: FormGroup;
  offset = 0;
  limit = 21;
  loading = true;
  likes: Array<Video> = [];

  submitForm(): void {
    const { searchby, value } = this.validateForm.value;
    if (searchby && value) {
      this.loading = true;
      this.videosService.getVideosSearch(searchby, value).subscribe((o) => {
        this.videos = o;
        this.loading = false;
      });
    } else {
      this.loading = true;
      this.videosService.getVideosDefault(this.limit.toString(), this.offset.toString()).subscribe((o) => {
        this.videos = o;
        this.loading = false;
      });
    }
  }

  constructor(
    private videosService: VideosService,
    private appConfigService: AppConfigService,
    private cdr: ChangeDetectorRef,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      searchby: [null],
      value: [null],
    });
    this.loading = true;
    this.videosService.getVideosDefault(this.limit.toString(), this.offset.toString()).subscribe((o) => {
      this.videos = o;
      this.videosService.likes$.subscribe(ids => {
          this.videos.forEach(video => {
            const index = ids.indexOf(video.id || 0) >= 0;
            if (index) {
              video.liked = true;
            }
          });
          this.cdr.markForCheck();
        });
      this.videosService.getLikeVideoId();
      this.loading = false;
    });
  }

  handleClick(): void {
    this.loading = true;
    this.videosService.getVideosDefault(this.limit.toString(), this.videos.length.toString()).subscribe((o) => {
      this.videos = this.videos.concat(o);
      this.loading = false;
    });
  }
}
