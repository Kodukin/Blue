import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookNowComponent } from './book-now/book-now.component';
import { BookNow2Component } from "./book-now2/book-now2.component";
import { CheckAvailability2Component } from "./check-availability2/check-availability2.component";
import { CheckAvailability3Component } from "./check-availability3/check-availability3.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BookNowComponent, BookNow2Component, CheckAvailability2Component, CheckAvailability3Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
