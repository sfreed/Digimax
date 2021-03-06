import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ThemeFiveComponent } from './theme-five.component';

describe('ThemeFiveComponent', () => {
  let component: ThemeFiveComponent;
  let fixture: ComponentFixture<ThemeFiveComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
