import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollDashComponent } from './poll-dash.component';

describe('PollDashComponent', () => {
  let component: PollDashComponent;
  let fixture: ComponentFixture<PollDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
