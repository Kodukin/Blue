import { Routes } from '@angular/router';
import { BookNowComponent } from './book-now/book-now.component';
import { BookNow2Component } from './book-now2/book-now2.component';
import { CheckAvailability2Component } from './check-availability2/check-availability2.component';

export const routes: Routes = [
    {path:'', title:"welcome",component:BookNowComponent },
    {path:'booking',title:"welcome", component:BookNowComponent },
    {path:'**',title:"welcome", component:BookNowComponent },
    {path: 'book-now', component: BookNow2Component},
    {path: 'check-availability', component: CheckAvailability2Component}

];
