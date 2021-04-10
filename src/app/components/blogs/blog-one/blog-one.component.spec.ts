import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BlogOneComponent } from './blog-one.component';

describe('BlogOneComponent', () => {
  let component: BlogOneComponent;
  let fixture: ComponentFixture<BlogOneComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
