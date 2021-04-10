import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ContactOneComponent } from './contact-one.component';

describe('ContactOneComponent', () => {
  let component: ContactOneComponent;
  let fixture: ComponentFixture<ContactOneComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
