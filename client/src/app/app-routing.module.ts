import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user/user.component';
import { UserNewComponent } from './user/user-new/user-new.component';

import { PollComponent } from './poll/poll.component';
import { PollAllComponent } from './poll/poll-all/poll-all.component'; 
import { PollDashComponent } from './poll/poll-dash/poll-dash.component';
import { PollSurveyComponent } from './poll/poll-survey/poll-survey.component';

const routes: Routes = [
  { path: 'user', component: UserComponent, children: [
    {path: 'new', component: UserNewComponent}
  ]},

  { path: 'dashboard', pathMatch: 'full', component: PollDashComponent},
  { path: 'poll/all', pathMatch: 'full', component: PollAllComponent},
  { path: 'poll/:id', pathMatch: 'full', component: PollSurveyComponent},

  { path: '', pathMatch: 'full', component: UserComponent, children: [
    {path: '', component: UserNewComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
