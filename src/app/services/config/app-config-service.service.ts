import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, catchError, map, Observable, of} from "rxjs";

export interface IConfig {
  apiUrl: string;
}


// fall back configurations
export const Config = {
  // apiUrl: environment.apiRoot
};


@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  constructor(private http: HttpClient) {}

  private configUrl = 'assets/config.json';
  // appConfig: object | undefined;

  private config = new BehaviorSubject<IConfig>(Config as IConfig);
  config$: Observable<IConfig> = this.config.asObservable();
  private static _config: IConfig;

  private _createConfig(config: any): void {
    // cast all keys as are
    const _config = { ...Config, ...(<IConfig>config) };
    _config.apiUrl

    // set static member
    AppConfigService._config = _config;

    // next
    this.config.next(config);
  }

  loadAppConfig(): Observable<boolean> {
    return this.http.get(this.configUrl).pipe(
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



  //
  //
  // // public property
  // public Config: IConfig;
  //
  //
  // loadAppConfig(): Subscription {
  //   return this.http.get(this.configUrl)
  //     .subscribe(data => {
  //       this.appConfig = data;
  //     });
  // }
  //
  // // get config() {
  // //   return this.appConfig;
  // // }
}
