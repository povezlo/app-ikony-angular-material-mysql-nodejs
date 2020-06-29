import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MainLayoutComponent} from './shared/components/main-layout/main-layout.component';
import {IconComponent} from './shared/components/icon/icon.component';
import {IconPageComponent} from './icon-page/icon-page.component';
import {HomePageComponent} from './home-page/home-page.component';
import {AdminModule} from './admin/admin.module';
import {LazyLoadImageModule, scrollPreset} from 'ng-lazyload-image';
import {AuthService} from './admin/shared/services/auth.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import ruLocale from '@angular/common/locales/ru-UA';
import {AuthInterceptor} from './shared/auth.interceptor';
import {SharedModule} from './shared/shared.module';
import {WorkWithFirebaseIconsService} from './shared/work-with-firebase-icons.service';
import {LeftNavbarComponent} from './shared/components/left-navbar/left-navbar.component';
import {Ng5SliderModule} from 'ng5-slider';
import {NgpSortModule} from 'ngp-sort-pipe';
import {MenuComponent} from './shared/components/menu/menu.component';
import { CartComponent } from './cart/cart.component';
import {registerLocaleData} from '@angular/common';
import { AboutPageComponent } from './about-page/about-page.component';
registerLocaleData(ruLocale, 'ua');

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    IconComponent,
    IconPageComponent,
    HomePageComponent,
    LeftNavbarComponent,
    MenuComponent,
    CartComponent,
    AboutPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AdminModule,
    SharedModule,
    LazyLoadImageModule.forRoot({
      preset: scrollPreset
    }),
    Ng5SliderModule,
    NgpSortModule,
    FlexLayoutModule
  ],
  providers: [AuthService, WorkWithFirebaseIconsService,
    {provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: AuthInterceptor
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
