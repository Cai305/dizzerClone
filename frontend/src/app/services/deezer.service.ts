import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
    
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
   
import { Artist } from '../interfaces/artist';
    
@Injectable({
  providedIn: 'root'
})
export class DeezerService {
    
  apiURL = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/";
  private artistURL = this.apiURL +"artist";
  private searchUrl = this.apiURL +"search?q=";
  private usersArtists = this.apiURL + "user/2529/artists"
  private artistsAlbumUrl = this.apiURL +"artist";
    
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
   
  constructor(private httpClient: HttpClient) { }
    
  get_One_Artist(id:number): Observable<Artist[]> {
    return this.httpClient.get<Artist[]>(`${this.artistURL}/`+id)
    .pipe(
      catchError(this.errorHandler)
    );
  }

  get_Artist_Albums(id:number): Observable<Artist[]> {
    return this.httpClient.get<any[]>("https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/27/albums")
    .pipe(
      catchError(this.errorHandler)
    );
  }


  get_All_Artist_Top_Tracks(): Observable<Artist[]> {
    return this.httpClient.get<Artist[]>(`${this.apiURL}`)
    .pipe(
      catchError(this.errorHandler)
    );
  }

  search_Artist(artist_name:string){
    return this.httpClient.get<Artist[]>(`${this.searchUrl}+${artist_name}`)
    .pipe(
      catchError(this.errorHandler)
    );
  }

  get_Artist(){
    return this.httpClient.get<Artist[]>(`${this.searchUrl}`)
    .pipe(
      catchError(this.errorHandler)
    );
  }

  get_User_Artist(){
    return this.httpClient.get<Artist[]>(`${this.usersArtists}`)
    .pipe(
      catchError(this.errorHandler)
    );
  }

  get_Top_Songs(id:number){
    return this.httpClient.get<any[]>(`${this.usersArtists}`+"artist/"+id+ "/top")
    .pipe(
      catchError(this.errorHandler)
    );
  }


  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    // return throwError(errorMessage);
    return throwError(() => new Error(errorMessage));
 }
}