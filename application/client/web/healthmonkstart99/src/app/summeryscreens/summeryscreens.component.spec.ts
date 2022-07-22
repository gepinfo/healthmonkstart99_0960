import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummeryscreensComponent } from './summeryscreens.component';

describe('SummeryscreensComponent', () => {
  let component: SummeryscreensComponent;
  let fixture: ComponentFixture<SummeryscreensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummeryscreensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummeryscreensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});