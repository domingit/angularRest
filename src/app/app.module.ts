import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './pages/home/home.module';
import { InterceptorsModule } from './core/interceptors/interceptors.module';
import { DescriptionComponent } from './pages/home/description.component';
import { DogComponent } from './pages/home/dog/dog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DescriptionComponent,
    DogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeModule,
    InterceptorsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
