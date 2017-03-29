import { Component, Input } from '@angular/core';
import { Keg } from './objects/keg';

@Component ({
  selector: 'kegUpdate',
  templateUrl: '../app/views/update.html'
})

export class UpdateComponent{
  @Input() keg: Keg;
  servePint(keg) {
    if(keg.pints === "You are out of this") {
      alert("You cannot sell pints you are out of!");
    } else {
      keg.pints-= 1;
      if(keg.pints === 0)
      {
        keg.pints = "You are out of this";
      }
    }
  }

  serveGrowler(keg) {
    if(keg.pints === "You are out of this") {
      alert("You cannot sell pints you are out of!");
    } else if(keg.pints < 2){
      alert("You do no have enough for a small growler");
    } else {
      keg.pints-= 2;
      if(keg.pints === 0)
      {
        keg.pints = "You are out of this";
      }
    }
  }

  serveLargeGrowler(keg) {
    if(keg.pints === "You are out of this") {
      alert("You cannot sell pints you are out of!");
    } else if(keg.pints < 4){
      alert("You do no have enough for a small growler");
    } else {
      keg.pints-= 4;
      if(keg.pints === 0)
      {
        keg.pints = "You are out of this";
      }
    }
  }
}
