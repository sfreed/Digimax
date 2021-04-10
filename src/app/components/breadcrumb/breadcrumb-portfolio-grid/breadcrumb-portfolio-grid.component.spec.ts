import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BreadcrumbPortfolioGridComponent } from './breadcrumb-portfolio-grid.component';

describe('BreadcrumbPortfolioGridComponent', () => {
  let component: BreadcrumbPortfolioGridComponent;
  let fixture: ComponentFixture<BreadcrumbPortfolioGridComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadcrumbPortfolioGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbPortfolioGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
