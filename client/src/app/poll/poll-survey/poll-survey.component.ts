import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Poll } from '../poll'
import { PollService } from '../poll.service'

@Component({
  selector: 'app-poll-survey',
  templateUrl: './poll-survey.component.html',
  styleUrls: ['./poll-survey.component.css']
})
export class PollSurveyComponent implements OnInit {
  questPoll: Poll;
  id: string;

  constructor(
    private _pollService: PollService,
    private _router: ActivatedRoute,
    private _route: Router
  ) {
    this._router.paramMap.subscribe( params => {
      this.id = params.get('id')
    })
   }

   ngOnInit() {
    this.questPoll = new Poll();
    this._pollService.getPoll(this.id,
      (poll) => {
        this.questPoll = poll;
          }, 
      (err) => {
        console.log(err);
      }
    );
  }
  vote(question) {
    this._pollService.votes(this.id, question,
      (poll) => {
        console.log('voted works')
          }, 
      (err) => {
        console.log(err);
      }
    );
  }
  // incrementValue() {
  //   var value = parseInt(document.getElementById('number').count, 0);
  //   value = isNaN(value) ? 0 : value;
  //   value++;
  //   document.getElementById('number').count = value;
  // } 
  // I tried... ugh....
}
