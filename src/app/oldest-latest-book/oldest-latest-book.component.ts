import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../book';
import { BookArchiveService } from '../book-archive.service';

@Component({
  selector: 'app-oldest-latest-book',
  templateUrl: './oldest-latest-book.component.html',
  styleUrls: ['./oldest-latest-book.component.css']
})
export class OldestLatestBookComponent {
  heading = '';
  book:Book = { };

  constructor(private router: Router, private _service: BookArchiveService) {

  }

  ngOnInit(): void {
    if(this.router.url == '/oldestbook'){
      this.heading = 'Oldest Book';
      this._service.getOldestBook().subscribe(data => this.book = data);
    } else if(this.router.url == '/latestbook'){
      this.heading = 'Latest Book';
      this._service.getLatestBook().subscribe(data => this.book = data);
    }

  }
}
