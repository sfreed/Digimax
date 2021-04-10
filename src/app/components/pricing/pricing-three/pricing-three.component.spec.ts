import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PricingThreeComponent } from './pricing-three.component';

describe('PricingThreeComponent', () => {
  let component: PricingThreeComponent;
  let fixture: ComponentFixture<PricingThreeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PricingThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
