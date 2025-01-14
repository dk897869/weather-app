import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { WeatherAppComponent } from './weather-app/weather-app.component';
import { HttpClientModule } from '@angular/common/http'; // Correct import
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WeatherAppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule  // Make sure HttpClientModule is imported
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
