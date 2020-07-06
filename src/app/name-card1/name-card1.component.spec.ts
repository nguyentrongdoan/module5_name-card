import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameCard1Component } from './name-card1.component';

describe('NameCard1Component', () => {
  let component: NameCard1Component;
  let fixture: ComponentFixture<NameCard1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameCard1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameCard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
