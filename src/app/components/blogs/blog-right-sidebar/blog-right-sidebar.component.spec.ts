import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BlogRightSidebarComponent } from './blog-right-sidebar.component';

describe('BlogRightSidebarComponent', () => {
  let component: BlogRightSidebarComponent;
  let fixture: ComponentFixture<BlogRightSidebarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogRightSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogRightSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
