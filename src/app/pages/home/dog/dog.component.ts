import { Component, Input } from '@angular/core';
import { Dog, DogDetail } from 'src/app/shared/models';
import { HomeService } from '../home.service';
import { BehaviorSubject, Observable, catchError, finalize, of } from 'rxjs';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.scss']
})


export class DogComponent {
  @Input() dog: Dog;
  @Input() position: number;

  dogDetail$: Observable<DogDetail>;
  private _loadingSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  get loading$(): Observable<boolean> { return this._loadingSubject.asObservable() };
  private _hasErrorSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  get hasError$(): Observable<boolean> { return this._hasErrorSubject.asObservable() };
  step = -1;

  constructor(private homeService: HomeService) {}

  setActivePosition(index: number) {
    this.step = index;
  }

  setInactivePosition(index: number) {
    if (this.step === index) {
      this.step = -1;
    }
  }

  fetchData() {
    this._loadingSubject.next(true);
    this._hasErrorSubject.next(false);
    this.dogDetail$ = this.homeService.fetchDogById(this.dog.reference_image_id).pipe(
      catchError((err) => {this._hasErrorSubject.next(true); return of(err)}),
      finalize(() => this._loadingSubject.next(false))
    );
  }

}
