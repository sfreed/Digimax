import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PromoOneComponent } from './promo-one.component';

describe('PromoOneComponent', () => {
  let component: PromoOneComponent;
  let fixture: ComponentFixture<PromoOneComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PromoOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
