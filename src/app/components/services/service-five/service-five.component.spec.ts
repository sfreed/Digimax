import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ServiceFiveComponent } from './service-five.component';

describe('ServiceFiveComponent', () => {
  let component: ServiceFiveComponent;
  let fixture: ComponentFixture<ServiceFiveComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
