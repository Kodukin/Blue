import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookNow2Component } from './book-now2.component';

describe('BookNow2Component', () => {
  let component: BookNow2Component;
  let fixture: ComponentFixture<BookNow2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookNow2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookNow2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
