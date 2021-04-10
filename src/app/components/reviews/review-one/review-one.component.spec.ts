import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ReviewOneComponent } from './review-one.component';

describe('ReviewOneComponent', () => {
  let component: ReviewOneComponent;
  let fixture: ComponentFixture<ReviewOneComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
