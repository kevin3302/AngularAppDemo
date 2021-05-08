import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Productdetails5Component } from './productdetails5.component';

describe('Productdetails5Component', () => {
  let component: Productdetails5Component;
  let fixture: ComponentFixture<Productdetails5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Productdetails5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Productdetails5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
