import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BreadcrumbContactComponent } from './breadcrumb-contact.component';

describe('BreadcrumbContactComponent', () => {
  let component: BreadcrumbContactComponent;
  let fixture: ComponentFixture<BreadcrumbContactComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadcrumbContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
