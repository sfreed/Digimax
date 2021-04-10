import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ThemeOneComponent } from './theme-one.component';

describe('ThemeOneComponent', () => {
  let component: ThemeOneComponent;
  let fixture: ComponentFixture<ThemeOneComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
