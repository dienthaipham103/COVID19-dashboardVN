import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StackedBar01Component } from './stacked-bar01.component';

describe('StackedBar01Component', () => {
  let component: StackedBar01Component;
  let fixture: ComponentFixture<StackedBar01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StackedBar01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackedBar01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
