import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddBookComponent} from './add-book/add-book.component';
import {ListBooksComponent} from './list-books/list-books.component';
import {UpdateBookComponent} from './update-book/update-book.component';


const routes: Routes = [{
  path : 'add',
  component: AddBookComponent
},
  {
    path: 'books',
    component: ListBooksComponent
  },
  {
    path: 'edit/:id',
    component: UpdateBookComponent
  },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
