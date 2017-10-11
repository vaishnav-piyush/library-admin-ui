import { Component, OnInit } from '@angular/core';
import { BookService } from "./book.service";
import { Book } from "./book.model";

@Component({
  selector: 'app-issued-books',
  templateUrl: './issued-books.component.html',
  styleUrls: ['./issued-books.component.css']
})
export class IssuedBooksComponent implements OnInit {

  pageTitle : string;
  errorMessage : string;
  issuedBooks : Book[];


  constructor(private _bookService : BookService) { 
    this.pageTitle = "Issued Books Listing";
  }

  ngOnInit() {
    this._bookService.getAllBooks().subscribe(
      books => {this.issuedBooks = books.filter(book => book.issued)},
      err => this.errorMessage = <any>err
    );
  }

}
