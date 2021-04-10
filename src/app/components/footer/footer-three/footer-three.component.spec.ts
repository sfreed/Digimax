import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FooterThreeComponent } from './footer-three.component';

describe('FooterThreeComponent', () => {
  let component: FooterThreeComponent;
  let fixture: ComponentFixture<FooterThreeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
