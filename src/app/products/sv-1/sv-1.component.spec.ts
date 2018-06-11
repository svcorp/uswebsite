import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sv1Component } from './sv-1.component';

describe('Sv1Component', () => {
  let component: Sv1Component;
  let fixture: ComponentFixture<Sv1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sv1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sv1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
