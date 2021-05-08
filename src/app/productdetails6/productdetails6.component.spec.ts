import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Productdetails6Component } from './productdetails6.component';

describe('Productdetails6Component', () => {
  let component: Productdetails6Component;
  let fixture: ComponentFixture<Productdetails6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Productdetails6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Productdetails6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
