import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ThemeFourComponent } from './theme-four.component';

describe('ThemeFourComponent', () => {
  let component: ThemeFourComponent;
  let fixture: ComponentFixture<ThemeFourComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
