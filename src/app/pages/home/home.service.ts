import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, finalize, map, tap } from 'rxjs';

import { compareNumbers } from 'src/app/shared/functions/sort';
import { Dog, DogDetail } from 'src/app/shared/models';
import { filterOptions } from '../../shared/functions/filter.functions';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private readonly _totalElements: BehaviorSubject<number> = new BehaviorSubject(0);
  totalElements$ = this._totalElements.asObservable();
  private readonly _filteredData: BehaviorSubject<Dog[]> = new BehaviorSubject([]);;
  filteredData$ = this._filteredData.asObservable();
  private readonly _isInitializedSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);
  isInitialized$ = this._isInitializedSubject.asObservable();
  private _data: Dog[];
  private readonly _maxCount = 10;
  private readonly _filterBy = 'name';

  constructor(private http: HttpClient) { }

  /**
   * fetch data and use default conditions (display maximum number of items)
   */
  initData$(): Observable<Dog[]> {
    return this.fetchAllDogs()
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

  fetchAllDogs(): Observable<Dog[]> {
    return this.http.get<any[]>('/api/breeds')
          .pipe(map(courses => courses.sort(compareNumbers<Dog>)));
  }

  fetchDogById(imageId: string): Observable<DogDetail> {
    return this.http.get<DogDetail>(`/api/images/${imageId}`);
  }

  private setDefaultFilteredConditions(data: Dog[]): void {
    if (data.length > this._maxCount) {
      this._filteredData.next(data.slice(0, this._maxCount));
    } else {
      this._filteredData.next(data);
    }

    this._totalElements.next(this._filteredData.value.length);
  }
}

