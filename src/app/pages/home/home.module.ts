import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { HomeService } from './home.service';
import { HomeApi } from './home.api';
import { DescriptionComponent } from './description.component';
import { DogComponent } from './dog/dog.component';
import { HomeComponent } from './home.component';
import { HttpClientModule } from '@angular/common/http';


const Modules = [
  CommonModule,
  FormsModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatExpansionModule,
  MatButtonModule,
  NgOptimizedImage,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
]

@NgModule({
  declarations: [
    DescriptionComponent,
    DogComponent,
    HomeComponent
  ],
  imports: [Modules],
  exports: [Modules,
    DescriptionComponent,
    DogComponent,
    HomeComponent
  ],
  providers: [HomeService, HomeApi]
})
export class HomeModule { }
