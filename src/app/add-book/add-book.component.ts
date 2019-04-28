import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Book} from "../models/book.model";
import {BookService} from '../shared/book.service';


@Component({
  selector: 'app-add',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

  book: Book = new Book();

  constructor(private router: Router, private bookService: BookService) {
  }


  addBook(): void {
    this.bookService.addBook(this.book)
      .subscribe( data => {
        alert("Book added successfully.");
      });



}
}


