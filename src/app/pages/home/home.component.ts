import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { BehaviorSubject, Observable, debounceTime, tap } from 'rxjs';
import { Dog } from 'src/app/shared/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  filterTitle = 'Filter by breed name';
  filterPlaceholder = 'Breed name';

  filterValue: string = '';
  filterInputSubject: BehaviorSubject<string> = new BehaviorSubject('');
  isInitialized$ = this.homeService.isInitialized$;

  dogList$: Observable<Dog[]>;
  totalCount$: Observable<number>;

  debounceTime = 200;

  constructor(
    private homeService: HomeService) {
      this.filterInputSubject.pipe(
        debounceTime(this.debounceTime),
        tap(value => this.homeService.filterData(value)),
      ).subscribe();
    }

  ngOnInit(): void {
    this.homeService.initData$().subscribe();
    this.dogList$ = this.homeService.filteredData$;
    this.totalCount$ = this.homeService.totalElements$;
  }

  clearFilter() {
    this.filterValue='';
    this.updateDogs('');
  }

  trackByNav(index: number, item: Dog): string {
    return `${item.name}_${index}`;
  }

  updateDogs(filterInput: string) {
    this.filterInputSubject.next(filterInput);
  }

}
