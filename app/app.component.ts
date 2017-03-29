import { Component } from '@angular/core';
import { Keg } from './objects/keg';
import { KEGS } from './models/mock-kegs';
import { UpdateComponent } from './kegupdate.component';

@Component({
  selector: 'app-root',
  template: `<h1>Yo fam, wat up?</h1>
  <div *ngFor="let keg of kegs">
    <div [class]="checkStatus(keg.pints)">
      <h2>Name: {{keg.name}}</h2>
      <h3>Brand: {{keg.brand}}</h3>
      <h3>Price: {{keg.price}}</h3>
      <h3>Speghet%: {{keg.spegContent}}</h3>
      <h3>Pints: {{keg.pints}}</h3>
      <kegUpdate [keg]="keg">Loading...</kegUpdate>
    </div>
  </div>





  `
})

export class AppComponent{
  kegs: Keg[] = KEGS;

  checkStatus(pints) {
    if(pints <= 10) {
      return "bg-warning";
    }
    else {
      return "bg-default";
    }
  }

  // newKeg(name, brand, price, spegContent, kegs) {
  //   kegs.push(new Keg(name, brand, price, spegContent));
  // }
}
