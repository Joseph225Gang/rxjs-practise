import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AutoCompleteComponent} from './auto-complete/auto-complete.component';
import {LiveSearchComponent} from './live-search/live-search.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';


const routes: Routes = [
  {path:'autocomplete',component:AutoCompleteComponent},
  {path:'liveSearch',component:LiveSearchComponent},
  {path: '', component:AutoCompleteComponent},
  {path:'**',component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
