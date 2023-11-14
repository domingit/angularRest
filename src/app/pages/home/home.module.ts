import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { HomeService } from './home.service';


import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';
import {MatNativeDateModule} from '@angular/material/core';


const MaterialModules = [
  CommonModule,
  FormsModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatExpansionModule,
  MatDatepickerModule,
  MatButtonModule,
  MatNativeDateModule
]

@NgModule({
  declarations: [],
  imports: [MaterialModules],
  exports: [MaterialModules],
  providers: [HomeService]
})
export class HomeModule { }
