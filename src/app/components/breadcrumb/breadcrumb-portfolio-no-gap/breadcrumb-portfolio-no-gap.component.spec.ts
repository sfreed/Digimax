import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BreadcrumbPortfolioNoGapComponent } from './breadcrumb-portfolio-no-gap.component';

describe('BreadcrumbPortfolioNoGapComponent', () => {
  let component: BreadcrumbPortfolioNoGapComponent;
  let fixture: ComponentFixture<BreadcrumbPortfolioNoGapComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadcrumbPortfolioNoGapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbPortfolioNoGapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
