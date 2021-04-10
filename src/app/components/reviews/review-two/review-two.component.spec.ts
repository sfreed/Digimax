import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ReviewTwoComponent } from './review-two.component';

describe('ReviewTwoComponent', () => {
  let component: ReviewTwoComponent;
  let fixture: ComponentFixture<ReviewTwoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
