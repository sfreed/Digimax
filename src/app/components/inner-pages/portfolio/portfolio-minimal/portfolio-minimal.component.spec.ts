import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PortfolioMinimalComponent } from './portfolio-minimal.component';

describe('PortfolioMinimalComponent', () => {
  let component: PortfolioMinimalComponent;
  let fixture: ComponentFixture<PortfolioMinimalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioMinimalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioMinimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
