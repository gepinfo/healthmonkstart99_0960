import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bmidetails1Component } from './bmidetails1.component';

describe('Bmidetails1Component', () => {
  let component: Bmidetails1Component;
  let fixture: ComponentFixture<Bmidetails1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bmidetails1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bmidetails1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});