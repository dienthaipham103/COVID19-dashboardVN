import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StackedBar03Component } from './stacked-bar03.component';

describe('StackedBar03Component', () => {
  let component: StackedBar03Component;
  let fixture: ComponentFixture<StackedBar03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StackedBar03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackedBar03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
