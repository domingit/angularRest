import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Observable, debounceTime, tap } from 'rxjs';
import { Dog } from 'src/app/shared/models';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [HomeService]
})
export class HomeComponent implements OnInit {
  
  filterTitle = 'Filter by breed name';
  filterPlaceholder = 'Breed name';

  filterValueControl: FormControl<string> = new FormControl(null);
  isInitialized$ = this.homeService.isInitialized$;
  dogList$: Observable<Dog[]>;

  debounceTime = 200;

  constructor(private homeService: HomeService) {

      this.filterValueControl.valueChanges.pipe(
        debounceTime(this.debounceTime),
        tap(value => this.homeService.filterData(value)),
      ).subscribe();
    }

  ngOnInit(): void {
    this.homeService.initData$().subscribe();
    this.dogList$ = this.homeService.filteredData$;
  }

  clearFilter() {
    this.filterValueControl.reset();
  }

  trackByNav(index: number, item: Dog): string {
    return `${item.name}_${index}`;
  }

}
