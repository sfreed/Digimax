import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BreadcrumbBlogThreeColumnComponent } from './breadcrumb-blog-three-column.component';

describe('BreadcrumbBlogThreeColumnComponent', () => {
  let component: BreadcrumbBlogThreeColumnComponent;
  let fixture: ComponentFixture<BreadcrumbBlogThreeColumnComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadcrumbBlogThreeColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbBlogThreeColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
