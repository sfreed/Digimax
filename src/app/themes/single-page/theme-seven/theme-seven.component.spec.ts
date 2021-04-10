import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ThemeSevenComponent } from './theme-seven.component';

describe('ThemeSevenComponent', () => {
  let component: ThemeSevenComponent;
  let fixture: ComponentFixture<ThemeSevenComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeSevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
