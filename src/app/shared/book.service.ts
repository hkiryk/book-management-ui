import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Book } from '../models/book.model';
import {Observable} from "rxjs";


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class BookService {

  constructor(private http:HttpClient) {}

  private bookUrl = 'http://localhost:8080/books';


  public getBooks() {
    return this.http.get<Book[]>(this.bookUrl);
  }

  public getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(this.bookUrl +"/" + id);
  }

  public  updateBook(book) {
    return this.http.put<Book>(this.bookUrl +"/" + book.id, book);
  }

  public  addComment (comment){
    return this.http.post<Comment>(this.bookUrl, comment);
  }
  public deleteBook(book) {
    return this.http.delete(this.bookUrl + "/"+ book.id);
  }

  public addBook(book) {
    return this.http.post<Book>(this.bookUrl, book);
  }



}
