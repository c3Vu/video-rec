import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PreferenceRoutingModule} from './preference-routing.module';
import {PreferenceComponent} from './preference.component';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzFormModule} from 'ng-zorro-antd/form';
import {ReactiveFormsModule} from '@angular/forms';
import {NzInputModule} from 'ng-zorro-antd/input';



@NgModule({
  declarations: [PreferenceComponent],
  imports: [
    CommonModule,
    PreferenceRoutingModule,
    NzButtonModule,
    NzFormModule,
    ReactiveFormsModule,
    NzInputModule
  ]
})
export class PreferenceModule { }
