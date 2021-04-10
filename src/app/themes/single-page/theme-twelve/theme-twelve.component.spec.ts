import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ThemeTwelveComponent } from './theme-twelve.component';

describe('ThemeTwelveComponent', () => {
  let component: ThemeTwelveComponent;
  let fixture: ComponentFixture<ThemeTwelveComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeTwelveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeTwelveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
