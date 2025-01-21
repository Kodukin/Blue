import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckAvailability3Component } from './check-availability3.component';

describe('CheckAvailability3Component', () => {
  let component: CheckAvailability3Component;
  let fixture: ComponentFixture<CheckAvailability3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckAvailability3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckAvailability3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
