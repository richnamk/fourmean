import { Poll } from './poll';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PollService {
  currPoll: Poll;
  polls: Poll[];
  surv: Poll;

  constructor( private _http: Http ) { }

  listPolls(callback, errorback) {
    this._http.get('/polls').subscribe( 
      (res) => {
        const polls =res.json();
        if(polls){ 
          this.polls = polls;
        }
        callback(this.polls);
      },
      (err) => {
        errorback(err);
      }
    )
  }
  makePoll(poll: Poll, callback, errorback) {
    this._http.post('/polls', poll).subscribe(
      (res) => {
        const poll = res.json();
        this.currPoll = poll;
        callback(this.currPoll);
      }, 
      (err) => {
        errorback(err);
      }
    )
  }
  getPoll(id, callback, errorback) {
    this._http.get('/polls/'+id).subscribe(
      (res) => {
        const poll = res.json();
        if(poll) {
          this.surv = poll;
        }
        callback(this.surv);
      }, 
      (err) => {
        errorback(err);
      }
    );
  }
  deletePoll(id, callback, errorback) {
    this._http.delete('/polls/'+id).subscribe(
      (res) => {
        const poll = res.json();
        this.currPoll = poll;
        callback(this.currPoll);
      }, 
      (err) => {
        errorback(err);
      }
    )
  }
  votes(id, opt, callback, errorback) {
    this._http.post('/polls/'+id, opt).subscribe(
      (res) => {
        const poll = res.json();
        if(poll) {
          this.surv = poll;
        }
        callback(this.surv);
      }, 
      (err) => {
        errorback(err);
      }
    );
  }
}
