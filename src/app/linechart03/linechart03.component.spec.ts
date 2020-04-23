import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Linechart03Component } from './linechart03.component';

describe('Linechart03Component', () => {
  let component: Linechart03Component;
  let fixture: ComponentFixture<Linechart03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Linechart03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Linechart03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
