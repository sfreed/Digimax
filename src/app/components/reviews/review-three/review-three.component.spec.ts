import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ReviewThreeComponent } from './review-three.component';

describe('ReviewThreeComponent', () => {
  let component: ReviewThreeComponent;
  let fixture: ComponentFixture<ReviewThreeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
