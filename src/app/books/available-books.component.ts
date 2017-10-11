import { Component, OnInit } from '@angular/core';
import { Book } from "./book.model";
import { BookService } from "./book.service";

@Component({
  selector: 'app-available-books',
  templateUrl: './available-books.component.html',
  styleUrls: ['./available-books.component.css']
})
export class AvailableBooksComponent implements OnInit {

  pageTitle: string ;
  availableBooks: Book[];
  errorMessage : string;
  
  constructor(private _bookService : BookService) { 
    this.pageTitle = "Available Books Listing";
  }

  ngOnInit() {
    this._bookService.getAllBooks().subscribe(
      books => {this.availableBooks = books.filter(book => !book.issued)},
      err => this.errorMessage = <any>err
    );
    
  }

}
