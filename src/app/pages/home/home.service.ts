import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, finalize, tap } from 'rxjs';

import { Dog } from 'src/app/shared/models';
import { filterOptions } from '../../shared/functions/filter.functions';
import { HomeApi } from './home.api';

@Injectable()
export class HomeService {

  private readonly _filteredData: BehaviorSubject<Dog[]> = new BehaviorSubject([]);;
  filteredData$ = this._filteredData.asObservable();
  private readonly _isInitializedSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);
  isInitialized$ = this._isInitializedSubject.asObservable();
  private _data: Dog[];
  private readonly _maxCount = 10;
  private readonly _filterBy = 'name';

  constructor(private api: HomeApi) { }

  /**
   * fetch data and use default conditions (display maximum number of items)
   */
  initData$(): Observable<Dog[]> {
    return this.api.fetchAllDogs()
      .pipe(
        tap(res => this._data = res),
        tap(res => this.setDefaultFilteredConditions(res)),
        finalize(() => this._isInitializedSubject.next(true))
      )
  }

  /**
   * 
   * @param filterInput value from the filter input to show required data
   */
  filterData(filterInput: string): void {
    this.setDefaultFilteredConditions(filterOptions<Dog>(this._data, filterInput, this._filterBy));
  }

  private setDefaultFilteredConditions(data: Dog[]): void {
    if (data.length > this._maxCount) {
      this._filteredData.next(data.slice(0, this._maxCount));
    } else {
      this._filteredData.next(data);
    }
  }
}

