import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {BannerComponent} from './components/banner/banner.component';
import {NzButtonModule} from 'ng-zorro-antd/button';

registerLocaleData(en);

@NgModule({
    declarations: [
      AppComponent,
      BannerComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    BrowserAnimationsModule,
    NzFormModule,
    NzLayoutModule,
    NzButtonModule
  ],
    providers: [{provide: NZ_I18N, useValue: en_US}],
    bootstrap: [AppComponent]
})
export class AppModule { }
