import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ContactTwoComponent } from './contact-two.component';

describe('ContactTwoComponent', () => {
  let component: ContactTwoComponent;
  let fixture: ComponentFixture<ContactTwoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
