import {
  APP_INITIALIZER,
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  HttpClientModule,
  HTTP_INTERCEPTORS,
  HttpClientJsonpModule,
} from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AuthInterceptor } from './auth/authconfig.interceptor';
import { SigninComponent } from './shared/signin/signin.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './shared/layouts/header/header.component';
import { SignupComponent } from './shared/signup/signup.component';
import { AccountActiveComponent } from './shared/account-active/account-active.component';
import { PasswordResetInitComponent } from './shared/account/password-reset-init/password-reset-init.component';
import { PasswordResetFinishComponent } from './shared/account/password-reset-finish/password-reset-finish.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { HomeComponent } from './shared/home/home.component';
import { JrSwitchCasesDirective } from './core/directive/jr-switch-cases.directive';
import { JumbotronHomeComponent } from './components/jumbotron-home/jumbotron-home.component';
import { AlertComponent } from './core/alert/alert.component';
import { AlertModule } from './core/alert/alert.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { SharedModule } from './shared/shared.module';
import { DerslerComponent } from './dersler/dersler.component';
import { CtaEventComponent } from './components/cta-event/cta-event.component';
import { FeatureComponent } from './components/feature/feature.component';
import { OurTeamComponent } from './components/our-team/our-team.component';
import { NeedHelpComponent } from './components/need-help/need-help.component';
import { PagesModule } from './pages/pages.module';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { BlogComponent } from './blog/blog.component';
import { TekDersComponent } from './components/tek-ders/tek-ders.component';
import { MyInitService } from './core/services/my-init.service';
import { Pages2Module } from './pages-2/pages-2.module';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { OrderModule } from 'ngx-order-pipe';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    HeaderComponent,
    SignupComponent,
    AccountActiveComponent,
    PasswordResetInitComponent,
    PasswordResetFinishComponent,
    NotFoundComponent,
    HomeComponent,
    JrSwitchCasesDirective,
    JumbotronHomeComponent,
    DerslerComponent,
    CtaEventComponent,
    FeatureComponent,
    OurTeamComponent,
    NeedHelpComponent,
    VideoPlayerComponent,
    BlogComponent,
    TekDersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    AlertModule,
    SharedModule,
    Pages2Module,
    YouTubePlayerModule,
    PagesModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    PdfViewerModule,
    OrderModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    MyInitService,
    {
      provide: APP_INITIALIZER,
      useFactory: (myInitService: MyInitService) => () =>myInitService.initCheck(),
      deps: [MyInitService],
      multi: true,
    },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
  exports: [VideoPlayerComponent],
})
export class AppModule {}
