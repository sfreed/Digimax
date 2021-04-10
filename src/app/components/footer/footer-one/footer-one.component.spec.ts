import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FooterOneComponent } from './footer-one.component';

describe('FooterOneComponent', () => {
  let component: FooterOneComponent;
  let fixture: ComponentFixture<FooterOneComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
