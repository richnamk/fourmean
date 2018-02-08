import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserService } from './user/user.service';
import { UserComponent } from './user/user.component';
import { UserNewComponent } from './user/user-new/user-new.component';
import { UserLogoutComponent } from './user/user-logout/user-logout.component';

import { PollService } from './poll/poll.service';
import { PollComponent } from './poll/poll.component';
import { PollAllComponent } from './poll/poll-all/poll-all.component';
import { PollSurveyComponent } from './poll/poll-survey/poll-survey.component';
import { PollDashComponent } from './poll/poll-dash/poll-dash.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserNewComponent,
    UserLogoutComponent,
    PollComponent,
    PollAllComponent,
    PollSurveyComponent,
    PollDashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [UserService, PollService],
  bootstrap: [AppComponent]
})
export class AppModule { }
