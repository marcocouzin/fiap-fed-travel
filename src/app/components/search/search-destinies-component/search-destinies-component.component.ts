import { Component } from '@angular/core';
import {AppConfigService, IConfig} from "../../../services/config/app-config-service.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-search-destinies-component',
  templateUrl: './search-destinies-component.component.html',
  styleUrls: ['./search-destinies-component.component.css']
})
export class SearchDestiniesComponentComponent {
  config$: Observable<IConfig> | undefined;

  constructor(private environment: AppConfigService) {}

  ngOnInit(): void {
    this.environment.config$.subscribe(val => {
      this.config$ = JSON.parse(JSON.stringify(val));
      console.log(JSON.parse(JSON.stringify(this.config$)).apiURL);
    })
  }
}

