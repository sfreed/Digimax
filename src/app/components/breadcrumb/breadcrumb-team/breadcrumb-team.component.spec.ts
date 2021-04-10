import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BreadcrumbTeamComponent } from './breadcrumb-team.component';

describe('BreadcrumbTeamComponent', () => {
  let component: BreadcrumbTeamComponent;
  let fixture: ComponentFixture<BreadcrumbTeamComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadcrumbTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
