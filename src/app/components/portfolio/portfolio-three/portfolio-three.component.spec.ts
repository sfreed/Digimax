import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PortfolioThreeComponent } from './portfolio-three.component';

describe('PortfolioThreeComponent', () => {
  let component: PortfolioThreeComponent;
  let fixture: ComponentFixture<PortfolioThreeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
