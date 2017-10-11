import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Book } from "./book.model";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { HttpErrorResponse } from "@angular/common/http";

@Injectable()
export class BookService {
  private _allBooksUrl = '../testdata/all-books.json';

  constructor(private _http : HttpClient) { 

  }

  getAllBooks() : Observable<Book[]> {
    return this._http.get<Book[]>(this._allBooksUrl)
    .do(data => console.log('All Books: ' + JSON.stringify(data)))
    .catch(this.ErrorHandler);
  }

  private ErrorHandler(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }

}
