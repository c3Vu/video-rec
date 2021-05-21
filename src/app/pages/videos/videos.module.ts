import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {VideosComponent} from './videos.component';
import {VideosRoutingModule} from './videos-routing.module';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzTypographyModule} from 'ng-zorro-antd/typography';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzInputGroupComponent, NzInputModule} from 'ng-zorro-antd/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NzIconModule} from 'ng-zorro-antd/icon';



@NgModule({
  declarations: [
    VideosComponent,
  ],
  exports: [
    NzFormModule
  ],
  imports: [
    CommonModule,
    VideosRoutingModule,
    NzLayoutModule,
    NzButtonModule,
    NzTypographyModule,
    NzInputModule,
    NzIconModule,
    NzFormModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class VideosModule { }
