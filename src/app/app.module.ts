import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AuthInterceptor} from "./auth/auth.interceptor";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { RedirectComponent } from './pages/redirect/redirect.component';
import {RouterModule} from "@angular/router";
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { StudentPanelComponent } from './components/student-panel/student-panel.component';
import { AnonymousPanelComponent } from './components/anonymous-panel/anonymous-panel.component';
import { AdminContestsComponent } from './pages/admin-contests/admin-contests.component';
import { AdminStudentsComponent } from './pages/admin-students/admin-students.component';
import { NewContestComponent } from './pages/new-contest/new-contest.component';
import { ContestComponent } from './pages/contest/contest.component';

@NgModule({
  declarations: [
    AppComponent,
    RedirectComponent,
    NotFoundComponent,
    NavBarComponent,
    HomeComponent,
    AdminPanelComponent,
    StudentPanelComponent,
    AnonymousPanelComponent,
    AdminContestsComponent,
    AdminStudentsComponent,
    NewContestComponent,
    ContestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
