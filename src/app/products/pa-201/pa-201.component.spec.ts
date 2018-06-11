import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pa201Component } from './pa-201.component';

describe('Pa201Component', () => {
  let component: Pa201Component;
  let fixture: ComponentFixture<Pa201Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pa201Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pa201Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
