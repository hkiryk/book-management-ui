import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {BookService} from "../shared/book.service";
import {Subscription} from "rxjs";


@Component({
  selector: 'app-update-details',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  book: any = {};


  sub: Subscription;


  constructor(private route: ActivatedRoute,
              private router: Router,
              private bookService: BookService) {
  }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.bookService.getBookById(id).subscribe((book: any) => {
          if (book) {
            this.book = book;
          } else {
            console.log(`Book with id '${id}' not found, returning to list`);
            this.gotoList();
          }
        });
      }
    });
  }

  gotoList() {
    this.router.navigate(['/books']);
  }

  updateBook(): void  {
    this.bookService.updateBook(this.book)
      .subscribe(
        data => {
          alert("Book updated successfully.");
        },
        error => {
          alert(error);
        });
  }

}
