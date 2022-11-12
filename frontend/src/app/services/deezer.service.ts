import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
    
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
   
import { Artist } from '../interfaces/artist';
    
@Injectable({
  providedIn: 'root'
})
export class DeezerService {
    
  private apiURL = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/12";
  private searchUrl = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=eminem"
    
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
   
  constructor(private httpClient: HttpClient) { }
    
  get_All_Artist(): Observable<Artist[]> {
    return this.httpClient.get<Artist[]>(this.apiURL)
    .pipe(
      catchError(this.errorHandler)
    );
  }

  get_One_Artist(): Observable<Artist[]> {
    return this.httpClient.get<Artist[]>(this.apiURL)
    .pipe(
      catchError(this.errorHandler)
    );
  }

  get_All__Artist_Albums(): Observable<Artist[]> {
    return this.httpClient.get<Artist[]>(this.apiURL)
    .pipe(
      catchError(this.errorHandler)
    );
  }


  get_All_Artist_Top_Tracks(): Observable<Artist[]> {
    return this.httpClient.get<Artist[]>(this.apiURL)
    .pipe(
      catchError(this.errorHandler)
    );
  }

  search(){

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