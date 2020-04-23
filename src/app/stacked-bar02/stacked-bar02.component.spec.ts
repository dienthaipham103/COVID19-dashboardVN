import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StackedBar02Component } from './stacked-bar02.component';

describe('StackedBar02Component', () => {
  let component: StackedBar02Component;
  let fixture: ComponentFixture<StackedBar02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StackedBar02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackedBar02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
