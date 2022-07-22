import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Persondetails1Component } from './persondetails1.component';

describe('Persondetails1Component', () => {
  let component: Persondetails1Component;
  let fixture: ComponentFixture<Persondetails1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Persondetails1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Persondetails1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});