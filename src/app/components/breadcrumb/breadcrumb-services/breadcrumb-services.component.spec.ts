import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BreadcrumbServicesComponent } from './breadcrumb-services.component';

describe('BreadcrumbServicesComponent', () => {
  let component: BreadcrumbServicesComponent;
  let fixture: ComponentFixture<BreadcrumbServicesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadcrumbServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
