import {Component} from '@angular/core';
import {AppConfigService, IConfig} from "../../../services/config/app-config-service.service";
import {debounceTime, distinctUntilChanged, Observable, Subject, switchMap, tap} from "rxjs";
import {FormControl, FormGroup} from "@angular/forms";
import {DestinyService} from "../../../services/search/destiny.service";
import {DestinationOut} from "../../../model/destiny/destination-out";

@Component({
  selector: 'app-search-destinies-component',
  templateUrl: './search-destinies-component.component.html',
  styleUrls: ['./search-destinies-component.component.css']
})
export class SearchDestiniesComponentComponent {

  searchForm = new FormGroup({
    destiny: new FormControl('')
  });


  config$: Observable<IConfig> | undefined;
  destinies$: Observable<DestinationOut[]> | undefined;
  private searchTerms = new Subject<string>();
  isLoading = new Subject<boolean>();


  constructor(
    private environment: AppConfigService,
    private destinyService: DestinyService,
  ) {
  }

  ngOnInit(): void {
    this.environment.config$.subscribe(val => {
      this.config$ = JSON.parse(JSON.stringify(val));
      console.log(JSON.parse(JSON.stringify(this.config$)).apiURL);
    })

    this.destinies$ = this.searchTerms
      .pipe(
        tap(_ => this.isLoading.next(true)),
        debounceTime(500),
        distinctUntilChanged(),
        switchMap((term: string) => this.destinyService.getDestinies(term, JSON.parse(JSON.stringify(this.config$)).apiURL)),
        tap(_ => this.isLoading.next(false)),
      );
  }

  search(): void {
    console.log('searching for: ' + this.searchForm.controls.destiny.value);
    this.searchTerms.next(this.searchForm.controls.destiny.value || '');
  }
}

