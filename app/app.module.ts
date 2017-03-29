import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UpdateComponent } from './kegupdate.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
  imports: [
  BrowserModule,
  FormsModule
  ],
  declarations: [AppComponent, UpdateComponent],
  bootstrap: [AppComponent]
})

export class AppModule { }
