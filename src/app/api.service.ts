import { importType } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { Drink } from './drink.model';
import { JsonReturn } from './drink.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/'
  constructor(private http : HttpClient) { }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  public get(){
     return this.http.get<JsonReturn>(this.BASE_URL +'filter.php?c=Cocktail');
  }

  public search(search: string){
    return this.http.get<JsonReturn>(this.BASE_URL + 'search.php?s=' + search);
  }
}

