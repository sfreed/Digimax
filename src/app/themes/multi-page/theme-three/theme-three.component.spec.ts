import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ThemeThreeComponent } from './theme-three.component';

describe('ThemeThreeComponent', () => {
  let component: ThemeThreeComponent;
  let fixture: ComponentFixture<ThemeThreeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
