import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http"
import { AppRoutes } from "./app.routing";
import { BookService } from "./books/book.service";
import { AvailableBooksComponent } from "./books/available-books.component";
import { IssuedBooksComponent } from "./books/issued-books.component";

@NgModule({
  declarations: [
    AppComponent,
    AvailableBooksComponent, 
    IssuedBooksComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    AppRoutes
  ],
  providers: [
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
