import { Component, OnInit } from '@angular/core';
import {BookService} from "../shared/book.service";
import {Book} from '../models/book.model';
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit {
 books: Array<any>;


  constructor(private router: Router, private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getBooks().subscribe(data => {
      this.books = data;
    });
  };

  deleteBook (book: Book): void {
      this.bookService.deleteBook(book)
        .subscribe( data => {
          this.books = this.books.filter(u => u !== book);
        });
    }
}

