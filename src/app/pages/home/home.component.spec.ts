import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { of } from 'rxjs';

import { HomeComponent } from './home.component';
import { DescriptionComponent } from './description.component';
import { HomeService } from './home.service';
import { Dog, DogDetail } from 'src/app/shared/models';
import { HomeApi } from './home.api';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let homeServiceSpy: jasmine.SpyObj<HomeService>;
  let httpClientSpy: { get: jasmine.Spy };
  let service: HomeService;
  let apiService: HomeApi;
  const mockDogs: Dog[] = [
    { weight: {imperial: "6 - 13", metric: "3 - 6" }, height: {imperial: "9 - 11.5", metric: "23 - 29" }, id: 1, name: "Affenpinscher", bred_for: "Small rodent hunting, lapdog", breed_group: "Toy", life_span: "10 - 12 years", temperament: "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving", origin: "Germany, France", reference_image_id: "BJa4kxc4X", image: { id: "BJa4kxc4X", width: 1600, height: 1199, url: "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg"}},
    { weight: { imperial: "50 - 60", metric: "23 - 27" }, height: { imperial: "25 - 27", metric: "64 - 69" }, id: 2, name: "Afghan Hound", bred_for: "Coursing and hunting", breed_group: "Hound", life_span: "10 - 13 years", temperament: "Aloof, Clownish, Dignified, Independent, Happy", origin: "Afghanistan, Iran, Pakistan", reference_image_id: "hMyT4CDXR", image: { id: "hMyT4CDXR", width: 606, height: 380, url: "https://cdn2.thedogapi.com/images/hMyT4CDXR.jpg" } }
  ];
  const mockDogDetail: DogDetail = { id: '1', url: 'url1', breeds: [{ weight: { imperial: "50 - 60", metric: "23 - 27" }, height: { imperial: "25 - 27", metric: "64 - 69" }, id: 2, name: "Afghan Hound", bred_for: "Coursing and hunting", breed_group: "Hound", life_span: "10 - 13 years", temperament: "Aloof, Clownish, Dignified, Independent, Happy", origin: "Afghanistan, Iran, Pakistan", reference_image_id: "hMyT4CDXR" }], width: 100, height: 100 };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    // service = new HomeService(httpClientSpy as any);
    apiService = new HomeApi(httpClientSpy as any);
    const spy = jasmine.createSpyObj('HomeService', ['initData$', 'filterData']);

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        FormsModule,
        MatInputModule,
        MatFormFieldModule,
        MatExpansionModule,
        BrowserAnimationsModule,
      ],
      declarations: [HomeComponent, DescriptionComponent],
      providers: [{ provide: HomeService, useValue: spy }]
    }).compileComponents();
    
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    homeServiceSpy = TestBed.inject(HomeService) as jasmine.SpyObj<HomeService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call initData$ on ngOnInit', waitForAsync(() => {
    // Arrange
    homeServiceSpy.initData$.and.returnValue(of()); // Mocking the initData$ observable

    // Act
    component.ngOnInit();

    // Assert
    fixture.whenStable().then(() => {
      expect(homeServiceSpy.initData$).toHaveBeenCalled();
    });
  }));

  it('should fetch all dogs successfully', () => {
    

    httpClientSpy.get.and.returnValue(of(mockDogs));

    apiService.fetchAllDogs().subscribe((dogs) => {
      expect(dogs).toEqual(mockDogs);
    });
  });

  it('should fetch a dog by ID successfully', () => {
    httpClientSpy.get.and.returnValue(of(mockDogDetail));

    apiService.fetchDogById('1').subscribe((dogDetail) => {
      expect(dogDetail).toEqual(mockDogDetail);
    });
  });

  it('should track items for trackBy', () => {
    // Arrange
    const index = 1;
    const dog = mockDogs[0];
    // Act
    const result = component.trackByNav(index, dog);

    // Assert
    expect(result).toEqual(`${dog.name}_${index}`);
  });

});