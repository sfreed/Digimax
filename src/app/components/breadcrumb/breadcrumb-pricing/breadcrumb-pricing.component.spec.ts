import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BreadcrumbPricingComponent } from './breadcrumb-pricing.component';

describe('BreadcrumbPricingComponent', () => {
  let component: BreadcrumbPricingComponent;
  let fixture: ComponentFixture<BreadcrumbPricingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadcrumbPricingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
