import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PortfolioNoGapComponent } from './portfolio-no-gap.component';

describe('PortfolioNoGapComponent', () => {
  let component: PortfolioNoGapComponent;
  let fixture: ComponentFixture<PortfolioNoGapComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioNoGapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioNoGapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
