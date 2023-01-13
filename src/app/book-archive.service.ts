import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookArchiveService {

  constructor(private _http:HttpClient) { }

  getOldestBook():Observable<Book> {
    return this._http.get<any>("http://localhost:8081/bookstore/oldest_book")
  }

  getLatestBook():Observable<Book> {
    return this._http.get<any>("http://localhost:8081/bookstore/latest_book")
  }
}
