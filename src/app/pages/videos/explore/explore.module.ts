import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ExploreRoutingModule} from './explore-routing.module';
import {ExploreComponent} from './explore.component';
import {VideoComponent} from '../../../components/video/video.component';
import {NzImageModule} from 'ng-zorro-antd/image';
import {NzTypographyModule} from 'ng-zorro-antd/typography';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzFormModule} from 'ng-zorro-antd/form';
import {ReactiveFormsModule} from '@angular/forms';
import {NzSelectModule} from 'ng-zorro-antd/select';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzSpinModule} from 'ng-zorro-antd/spin';



@NgModule({
  declarations: [ExploreComponent, VideoComponent],
  imports: [
    CommonModule,
    ExploreRoutingModule,
    NzImageModule,
    NzTypographyModule,
    NzIconModule,
    NzButtonModule,
    NzFormModule,
    ReactiveFormsModule,
    NzSelectModule,
    NzInputModule,
    NzSpinModule
  ],
  exports: [
    VideoComponent
  ]
})
export class ExploreModule { }
