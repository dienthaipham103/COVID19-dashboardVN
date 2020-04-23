import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallTableComponent } from './small-table.component';

describe('SmallTableComponent', () => {
  let component: SmallTableComponent;
  let fixture: ComponentFixture<SmallTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
