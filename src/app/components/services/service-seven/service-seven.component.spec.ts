import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ServiceSevenComponent } from './service-seven.component';

describe('ServiceSevenComponent', () => {
  let component: ServiceSevenComponent;
  let fixture: ComponentFixture<ServiceSevenComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceSevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
