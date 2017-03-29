import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UpdateComponent } from './keg-update.component';
import { NewSpegComponent } from './new-speg-beer.component';
import { SpegComponent } from './speg-beer.component';
import { FormsModule }   from '@angular/forms';
import { ServablePipe } from './servable.pipe';

@NgModule({
  imports: [
  BrowserModule,
  FormsModule
  ],
  declarations: [AppComponent, UpdateComponent, NewSpegComponent, SpegComponent, ServablePipe],
  bootstrap: [AppComponent]
})

export class AppModule { }
