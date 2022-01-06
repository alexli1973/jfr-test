import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

import { Observable, throwError } from "rxjs";
import {catchError, map} from 'rxjs/operators';

import { ITab } from "../../models/interfaces";


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private jsonApiData = 'assets/api-data.json';

  constructor(private http: HttpClient) { }

  public getAllData(): Observable<any> {
    return this.http.get<ITab[]>(this.jsonApiData).pipe(map(data => {
        return data.map((tab: ITab, index) => {
          /**
           * here we can modify the response for our model
           */
          //const active = index === 0;
          const title = tab.title.toLowerCase();
          return {...tab, title, index};
        });
      }),
      catchError(this.handleError))
  }

  public handleError(error: HttpErrorResponse) {
    console.log('handleError', error.message);
    return throwError(error.message);
  }

}
