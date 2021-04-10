import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ContentOneComponent } from './content-one.component';

describe('ContentOneComponent', () => {
  let component: ContentOneComponent;
  let fixture: ComponentFixture<ContentOneComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
