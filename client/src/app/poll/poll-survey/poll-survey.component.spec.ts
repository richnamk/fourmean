import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollSurveyComponent } from './poll-survey.component';

describe('PollSurveyComponent', () => {
  let component: PollSurveyComponent;
  let fixture: ComponentFixture<PollSurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollSurveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
