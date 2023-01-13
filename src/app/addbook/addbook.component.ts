import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})

export class AddbookComponent {
  onSubmit(addbookform: NgForm) {
    console.log(addbookform.value);  // { first: '', last: '' }
    console.log(addbookform.valid);  // false
  }
}
