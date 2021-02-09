import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class DataService {

  private data = {};

  constructor(private http: HttpClient) {}

  setOption(option, value) {
    this.data[option] = value;
  }

  getOption(key) {
    return this.data[key];
  }

  fetchSettings() {
    const settingsSheet = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRqd2MCoQyZKM4FGiSBElM9s0mzKVKxP6NLskJavxAsRWD-Tdpb90ReTdx3vwiQ21QgOUohmdZqle43/pub?gid=0&single=true&output=tsv';
    return this.http.get(settingsSheet, { responseType: 'text' }).pipe( tap(), catchError(this.handleError) );
  }

  fetchMenu() {
    const menuSheet = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRqd2MCoQyZKM4FGiSBElM9s0mzKVKxP6NLskJavxAsRWD-Tdpb90ReTdx3vwiQ21QgOUohmdZqle43/pub?gid=24836751&single=true&output=tsv';
    return this.http.get(menuSheet, { responseType: 'text' }).pipe( tap(), catchError(this.handleError) );
  }

  private handleError(err: HttpErrorResponse) {
    const errorMessage = err.error instanceof ErrorEvent ?
      `An error occurred: ${err.error.message}` :
      `Server returned code: ${err.status}, error message is: ${err.message}`;

    return throwError(errorMessage);
  }
}
