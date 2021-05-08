import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Productdetails3Component } from './productdetails3.component';

describe('Productdetails3Component', () => {
  let component: Productdetails3Component;
  let fixture: ComponentFixture<Productdetails3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Productdetails3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Productdetails3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
