import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PortfolioOneComponent } from './portfolio-one.component';

describe('PortfolioOneComponent', () => {
  let component: PortfolioOneComponent;
  let fixture: ComponentFixture<PortfolioOneComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
