import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistComponent } from './pages/artist/artist.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  { path:"" ,component: HomeComponent }, //Initial Routes to Home page
  { path:"artist/:id" ,component:ArtistComponent }, //Routes to artist page, this Route will pass the artist id through the routes paramiters
  { path:"search/:name", component:SearchComponent} //Routes to search page, this Route will pass the artist name through the routes param paramiters
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
