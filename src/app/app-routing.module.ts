import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewbooksComponent } from './viewbooks/viewbooks.component';
import { AddbookComponent } from './addbook/addbook.component';
import { OldestLatestBookComponent } from './oldest-latest-book/oldest-latest-book.component';

const routes: Routes = [ {path:'addbook', component:AddbookComponent},
                         {path:'', pathMatch: 'full', redirectTo:'viewbooks'},
                         {path:'viewbooks', component:ViewbooksComponent},
                         {path:'oldestbook', component:OldestLatestBookComponent},
                         {path:'latestbook', component:OldestLatestBookComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
