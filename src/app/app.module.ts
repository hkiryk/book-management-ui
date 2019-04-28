import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBookComponent } from './add-book/add-book.component';
import { ListBooksComponent } from './list-books/list-books.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AddCommentComponent } from './add-comment/add-comment.component';
import {BookService} from './shared/book.service';
import {UpdateBookComponent} from './update-book/update-book.component';


@NgModule({
  declarations: [
    AppComponent,
    AddBookComponent,
    ListBooksComponent,
    UpdateBookComponent,
    AddCommentComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
