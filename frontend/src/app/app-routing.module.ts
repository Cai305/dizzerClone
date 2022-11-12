import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistComponent } from './pages/artist/artist.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path:"" ,component: HomeComponent }, //Initial Routes to Home page
  { path:"artist/:id" ,component:ArtistComponent } //Routes to artist page, this Route will pass the artist id through the routes param
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
