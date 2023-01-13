import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookstoreService } from '../bookstore.service';
import { Book } from '../book';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})

export class AddbookComponent {
  errorMessage = '';
  added = false;

  constructor(private _service: BookstoreService) {}

  onSubmit(addbookform: NgForm) {
    console.log(addbookform.value);  // { first: '', last: '' }
    console.log(addbookform.valid);  // false
    var book = {name: addbookform.value.name,
                author:  addbookform.value.author,
                dateYear: addbookform.value.dateYear,
                price: addbookform.value.price};
    this._service.addBookToServer(book).subscribe({
        next: data => {
            this.added = true;
        },
        error: error => {
            this.errorMessage = error.message;
        }
    })
  }
}
