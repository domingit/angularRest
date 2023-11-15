import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

import { compareNumbers } from 'src/app/shared/functions/sort';
import { Dog, DogDetail } from 'src/app/shared/models';

@Injectable()
export class HomeApi {

  constructor(private http: HttpClient) { }

  fetchAllDogs(): Observable<Dog[]> {
    return this.http.get<any[]>('/api/breeds')
          .pipe(map(dogs => dogs.sort(compareNumbers<Dog>)));
  }

  fetchDogById(imageId: string): Observable<DogDetail> {
    return this.http.get<DogDetail>(`/api/images/${imageId}`);
  }

}

