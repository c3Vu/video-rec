import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SpaceRoutingModule} from './space-routing.module';
import {SpaceComponent} from './space.component';
import {ExploreModule} from '../explore/explore.module';



@NgModule({
  declarations: [SpaceComponent],
  imports: [
    CommonModule,
    SpaceRoutingModule,
    ExploreModule
  ]
})
export class SpaceModule { }
