import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookstoreService {

  constructor(private _http:HttpClient) { }

  getBooksFromServer():Observable<any> {
    return this._http.get<any>("http://localhost:8081/bookstore")
  }

  addBookToServer(data: any) {
    return this._http.post<any>("http://localhost:8081/bookstore", data)
  }

  deleteBookFromServer(id: any) {
    return this._http.delete<any>("http://localhost:8081/bookstore/" + id)
  }
}
