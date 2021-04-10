import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ContentThreeComponent } from './content-three.component';

describe('ContentThreeComponent', () => {
  let component: ContentThreeComponent;
  let fixture: ComponentFixture<ContentThreeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
