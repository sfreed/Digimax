import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TeamOneComponent } from './team-one.component';

describe('TeamOneComponent', () => {
  let component: TeamOneComponent;
  let fixture: ComponentFixture<TeamOneComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
