import { Component, Input } from '@angular/core';
import { Keg } from './objects/keg';

@Component ({
  selector: 'kegUpdate',
  templateUrl: '../app/views/update.html'
})

export class UpdateComponent{
  @Input() keg: Keg;
  servePint(keg) {
    keg.pints-= 1;
  }
}
