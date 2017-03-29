import { Component, Output, EventEmitter } from '@angular/core';
import{ Keg } from './objects/keg';

@Component({
  selector: 'new-speg',
  templateUrl: './../app/views/new-speg.html'
})

export class NewSpegComponent {
  @Output() sendNewObject = new EventEmitter();

  submitForm(name, brand, price, spegContent) {
    var newSpegBeer: Keg = new Keg(name, brand, price, spegContent);
    this.sendNewObject.emit(newSpegBeer);
  }
}
