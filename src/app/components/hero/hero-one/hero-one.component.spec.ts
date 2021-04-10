import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HeroOneComponent } from './hero-one.component';

describe('HeroOneComponent', () => {
  let component: HeroOneComponent;
  let fixture: ComponentFixture<HeroOneComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
