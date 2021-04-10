import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ServiceThreeComponent } from './service-three.component';

describe('ServiceThreeComponent', () => {
  let component: ServiceThreeComponent;
  let fixture: ComponentFixture<ServiceThreeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
