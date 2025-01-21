import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckAvailability2Component } from './check-availability2.component';

describe('CheckAvailability2Component', () => {
  let component: CheckAvailability2Component;
  let fixture: ComponentFixture<CheckAvailability2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckAvailability2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckAvailability2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
