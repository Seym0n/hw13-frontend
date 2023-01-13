import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookstoreService } from '../bookstore.service';
import { Book } from '../book';

@Component({
  selector: 'app-viewbooks',
  templateUrl: './viewbooks.component.html',
  styleUrls: ['./viewbooks.component.css']
})
export class ViewbooksComponent implements OnInit {

  alertMsg = '';
  alertType = '';
  books: Array<Book> = [];

  constructor(private _service: BookstoreService, private _route: Router) {}

  ngOnInit(): void {
    this.getbooks();
  }

  getbooks(){
    this._service.getBooksFromServer().subscribe(data => this.books = data)
  }

  RedirectToAddBook(){
    this._route.navigate(['/addbook'])
  }

  deleteBook(id: any){
    this._service.deleteBookFromServer(id).subscribe({
        next: data => {
            this.alertType = 'success';
            this.alertMsg = 'The book has been deleted';
            this.getbooks();
        },
        error: error => {
            this.alertType = 'danger';
            this.alertMsg = 'There was an error';
        }
    })
  }
}
