import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ContactThreeComponent } from './contact-three.component';

describe('ContactThreeComponent', () => {
  let component: ContactThreeComponent;
  let fixture: ComponentFixture<ContactThreeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
