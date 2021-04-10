import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BlogFourComponent } from './blog-four.component';

describe('BlogFourComponent', () => {
  let component: BlogFourComponent;
  let fixture: ComponentFixture<BlogFourComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
