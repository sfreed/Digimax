import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ServiceOneComponent } from './service-one.component';

describe('ServiceOneComponent', () => {
  let component: ServiceOneComponent;
  let fixture: ComponentFixture<ServiceOneComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
