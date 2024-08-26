import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    
    // Add other components, directives, and pipes here
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // Add other modules here
  ],
  providers: [
    // Add services here
  ],
  bootstrap: []
})
export class AppModule { }
