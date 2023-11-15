import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { HomeService } from './home.service';


const MaterialModules = [
  CommonModule,
  FormsModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatExpansionModule,
  MatButtonModule,
  NgOptimizedImage
]

@NgModule({
  declarations: [],
  imports: [MaterialModules],
  exports: [MaterialModules],
  providers: [HomeService]
})
export class HomeModule { }
