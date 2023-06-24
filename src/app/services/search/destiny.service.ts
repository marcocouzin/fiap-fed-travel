import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, of, tap} from "rxjs";
import {DestinationOut} from "../../model/destiny/destination-out";


@Injectable({
  providedIn: 'root'
})
export class DestinyService {

  constructor(
    private http: HttpClient,
  ) {
  }


  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  private static log(message: string) {
    console.log(message);
  }


  getDestinies(term: string, urlBFF: string): Observable<DestinationOut[]> {
    if (!term.trim()) {
      // if not search term, return empty array.
      return of([]);
    }

    return this.http.get<DestinationOut[]>(urlBFF.replace('?', term), this.httpOptions)
      .pipe(
        tap(_ => DestinyService.log(`found destinys matching "${term}"`)),
        catchError(this.handleError<DestinationOut[]>('searchDestiny', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: any[]) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      DestinyService.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as unknown as T);
    };
  }
}
