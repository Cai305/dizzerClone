import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ArtistComponent } from './pages/artist/artist.component';
import { BannerComponent } from './components/banner/banner.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NumbersTransformPipe } from './pipes/numbers-transform.pipe';
import { SearchComponent } from './pages/search/search.component';
import { SongnamePipe } from './pipes/songname.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ArtistComponent,
    BannerComponent,
    NumbersTransformPipe,
    SearchComponent,
    SongnamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
