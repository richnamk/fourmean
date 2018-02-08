import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { Poll } from '../poll';
import { User } from '../../user/user';
import { PollService } from '../poll.service';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-poll-dash',
  templateUrl: './poll-dash.component.html',
  styleUrls: ['./poll-dash.component.css']
})
export class PollDashComponent implements OnInit {
  user: User;
  polls: Poll[];

  constructor(
    private _pollService: PollService,
    private _userService: UserService,
    private _route: Router,
    private _location: Location
  ) { 
    this.polls = [];
  }

  ngOnInit() {
    this.user = this._userService.currentUser;
    this._pollService.listPolls(
      (polls) => {
        this.polls = polls;
          }, 
      (err) => {
        console.log(err);
      }
    );
  }
  clear() {
    this._location.back();
  }
  delete(id) {
    this._pollService.deletePoll(id,
    (poll) => {
      console.log('deleted works')
      this._pollService.listPolls(
        (polls) => {
          this.polls = polls;
         }, 
        (err) => {
          console.log(err);
        });
      this._route.navigateByUrl('/dashboard');
      },
      (err) => {
        console.log(err);
      }
     );
  }
}

