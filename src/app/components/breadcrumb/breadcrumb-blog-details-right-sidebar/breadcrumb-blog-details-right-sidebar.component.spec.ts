import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BreadcrumbBlogDetailsRightSidebarComponent } from './breadcrumb-blog-details-right-sidebar.component';

describe('BreadcrumbBlogDetailsRightSidebarComponent', () => {
  let component: BreadcrumbBlogDetailsRightSidebarComponent;
  let fixture: ComponentFixture<BreadcrumbBlogDetailsRightSidebarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadcrumbBlogDetailsRightSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbBlogDetailsRightSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
