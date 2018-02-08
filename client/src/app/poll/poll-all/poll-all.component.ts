import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Poll } from '../poll';
import { User } from '../../user/user';
import { PollService } from '../poll.service';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-poll-all',
  templateUrl: './poll-all.component.html',
  styleUrls: ['./poll-all.component.css']
})
export class PollAllComponent implements OnInit {
  currentUser: User;
  poll: Poll;

  constructor(
    private _route: Router,
    private _userService: UserService,
    private _pollService: PollService, 
  ) { }

  ngOnInit() {
    this.poll = new Poll();
    this.currentUser = this._userService.currentUser;
  }

   onSubmit() {
    this.poll._user = this.currentUser
    this._pollService.makePoll(this.poll, 
      (poll) => {
        this._route.navigateByUrl('/dashboard');
      },
      (err) => {
        console.log(err);
      }
    );
    this.poll = new Poll;
  }

}
