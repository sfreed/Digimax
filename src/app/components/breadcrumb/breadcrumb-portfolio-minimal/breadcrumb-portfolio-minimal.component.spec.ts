import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BreadcrumbPortfolioMinimalComponent } from './breadcrumb-portfolio-minimal.component';

describe('BreadcrumbPortfolioMinimalComponent', () => {
  let component: BreadcrumbPortfolioMinimalComponent;
  let fixture: ComponentFixture<BreadcrumbPortfolioMinimalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadcrumbPortfolioMinimalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbPortfolioMinimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
