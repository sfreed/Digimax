import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentPageAdministrationComponent } from './agent-page-administration.component';

describe('AgentPageAdministrationComponent', () => {
  let component: AgentPageAdministrationComponent;
  let fixture: ComponentFixture<AgentPageAdministrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentPageAdministrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentPageAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
