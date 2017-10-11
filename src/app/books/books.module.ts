import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvailableBooksComponent } from "./available-books.component";
import { BookService } from "./book.service";
import { BooksRouting } from "./books.routing";
import { IssuedBooksComponent } from './issued-books.component';

@NgModule({
  imports: [
    CommonModule, 
    BooksRouting
  ],
  declarations: [
    // AvailableBooksComponent,
  IssuedBooksComponent], 
  providers: [
  ]
})
export class BooksModule { }
