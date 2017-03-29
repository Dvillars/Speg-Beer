import { Component, Output, EventEmitter } from '@angular/core';
import{ Keg } from './objects/keg';

@Component({
  selector: 'new-speg',
  templateUrl: './../app/views/new-speg.html'
})

export class NewSpegComponent {
  @Output() sendNewObject = new EventEmitter();
}
