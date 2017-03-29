import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './objects/keg';

@Component ({
  selector: 'kegUpdate',
  templateUrl: '../app/views/update.html'
})

export class UpdateComponent{
  @Input() keg: Keg;
  @Output() clickSender = new EventEmitter();
  @Output() otherClickSender = new EventEmitter();

  done(keg: Keg) {
    this.clickSender.emit(keg);
  }

  addSale(price: number) {
    this.otherClickSender.emit(price);
  }

  servePint(keg: Keg) {
    if(keg.pints === 0) {
      alert("You cannot sell pints you are out of!");
    } else {
      this.addSale(keg.price);
      keg.pints-= 1;
      if(keg.pints === 0)
      {
        this.done(keg);
        alert(`You are now out of ${keg.name}`);
      }
    }
  }

  serveGrowler(keg) {
    if(keg.pints < 2){
      alert("You do no have enough for a small growler");
    } else {
      this.addSale(keg.price * 2);
      keg.pints-= 2;
      if(keg.pints === 0)
      {
        this.done(keg);
        alert(`You are now out of ${keg.name}`)
      }
    }
  }

  serveLargeGrowler(keg) {
    if(keg.pints === 0) {
      alert("You cannot sell pints you are out of!");
    } else if(keg.pints < 4){
      alert("You do no have enough for a small growler");
    } else {
      this.addSale(keg.price * 4);
      keg.pints-= 4;
      if(keg.pints === 0)
      {
        this.done(keg);
        alert(`You are now out of ${keg.name}`)
      }
    }
  }
}
