import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ThemeTenComponent } from './theme-ten.component';

describe('ThemeTenComponent', () => {
  let component: ThemeTenComponent;
  let fixture: ComponentFixture<ThemeTenComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeTenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeTenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
