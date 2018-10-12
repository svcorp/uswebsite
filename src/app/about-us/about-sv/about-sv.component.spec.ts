import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSvComponent } from './about-sv.component';

describe('AboutSvComponent', () => {
  let component: AboutSvComponent;
  let fixture: ComponentFixture<AboutSvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutSvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutSvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
