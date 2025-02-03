import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookNow2Component } from '../book-now2/book-now2.component';
import { CheckAvailability2Component } from '../check-availability2/check-availability2.component';
import { RouterModule, Routes } from '@angular/router';






const routes: Routes = 
[
  { path: 'book-now', component: BookNow2Component},
  { path: 'check-availability', component: CheckAvailability2Component},
  { path: '', redirectTo: '/book-now', pathMatch: 'full'}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
