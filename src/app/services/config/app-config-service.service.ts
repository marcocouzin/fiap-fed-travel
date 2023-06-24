import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, catchError, map, Observable, of} from "rxjs";
import {environment} from "../../../environments/environment";

export interface IConfig {
  apiUrl: string;
}


export const Config = {
};


@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  private config = new BehaviorSubject<IConfig>(Config as IConfig);
  config$: Observable<IConfig> = this.config.asObservable();
  private static _config: IConfig;


  constructor(private http: HttpClient) {}


  private _createConfig(config: any): void {
    // set static member
    AppConfigService._config = {...Config, ...(<IConfig>config)};
    this.config.next(config);
  }

  loadAppConfig(): Observable<boolean> {
    return this.http.get(environment.configUrl).pipe(
      map((response) => {
        this._createConfig(response);
        return true;
      }),
      catchError((error) => {
        // if in error, return set fall back from environment
        this._createConfig(Config);
        console.log(error);
        return of(false);
      })
    );
  }
}
