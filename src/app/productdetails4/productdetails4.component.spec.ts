import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Productdetails4Component } from './productdetails4.component';

describe('Productdetails4Component', () => {
  let component: Productdetails4Component;
  let fixture: ComponentFixture<Productdetails4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Productdetails4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Productdetails4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
