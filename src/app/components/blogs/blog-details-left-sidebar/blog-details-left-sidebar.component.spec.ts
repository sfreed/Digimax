import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BlogDetailsLeftSidebarComponent } from './blog-details-left-sidebar.component';

describe('BlogDetailsLeftSidebarComponent', () => {
  let component: BlogDetailsLeftSidebarComponent;
  let fixture: ComponentFixture<BlogDetailsLeftSidebarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogDetailsLeftSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogDetailsLeftSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
