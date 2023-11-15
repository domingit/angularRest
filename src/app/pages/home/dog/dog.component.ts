import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Dog, DogDetail } from 'src/app/shared/models';
import { BehaviorSubject, Observable, catchError, finalize, of, tap } from 'rxjs';
import { HomeApi } from '../home.api';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.scss'],
  providers: [HomeApi],
  changeDetection: ChangeDetectionStrategy.OnPush,
})


export class DogComponent {
  @Input(({ required: true })) dog: Dog;
  @Input(({ required: true })) position: number;

  private _loadingSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  get loading$(): Observable<boolean> { return this._loadingSubject.asObservable() };
  private _hasErrorSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  get hasError$(): Observable<boolean> { return this._hasErrorSubject.asObservable() };
  private _dogDetailSubject: BehaviorSubject<DogDetail> = new BehaviorSubject<DogDetail>(null);
  get dogDetail$(): Observable<DogDetail> { return this._dogDetailSubject.asObservable() };

  step = -1;

  constructor(private api: HomeApi) {}

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
    this.api.fetchDogById(this.dog.reference_image_id).pipe(
      tap(res => this._dogDetailSubject.next(res)),
      catchError((err) => {this._hasErrorSubject.next(true); return of(err)}),
      finalize(() => this._loadingSubject.next(false))
    ).subscribe();
  }

}
