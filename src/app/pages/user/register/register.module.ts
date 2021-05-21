import {NgModule} from '@angular/core';
import {RegisterComponent} from './register.component';
import {RegisterRoutingModule} from './register-routing.module';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzTypographyModule} from 'ng-zorro-antd/typography';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzFormModule} from 'ng-zorro-antd/form';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NzToolTipModule} from 'ng-zorro-antd/tooltip';
import {CommonModule} from '@angular/common';
import {NzSpinModule} from 'ng-zorro-antd/spin';

@NgModule({
  declarations: [RegisterComponent],
    imports: [
        CommonModule,
        RegisterRoutingModule,
        NzLayoutModule,
        NzButtonModule,
        NzTypographyModule,
        NzInputModule,
        NzIconModule,
        NzFormModule,
        ReactiveFormsModule,
        FormsModule,
        NzToolTipModule,
        NzSpinModule
    ],
})
export class RegisterModule {}
