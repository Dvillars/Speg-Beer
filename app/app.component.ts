import { Component } from '@angular/core';
import { Keg } from './objects/keg';
import { KEGS } from './models/mock-kegs';


@Component({
  selector: 'app-root',
  templateUrl: '../app/views/root.html'
})

export class AppComponent{
  masterKegList: Keg[] = KEGS;
  sales: number = 0;
  happyHour: boolean = false;
  scale: number = 0;

  happyHourToggle(userScale: number) {
    var tempScale: number = this.scale;
    if(!this.happyHour) {
      tempScale = (100 - userScale) / 100;
      this.masterKegList.forEach(function(keg){
        keg.price = keg.price * tempScale;
        keg.price = Number((keg.price).toFixed(2));
      })
      this.scale = tempScale;
    } else {
      this.masterKegList.forEach(function(keg){
        keg.price = keg.price / tempScale;
        keg.price = Number((keg.price).toFixed(2));
      });
    }
    this.happyHour = !this.happyHour;
  }

  addSale(price) {
    this.sales += price;
  }

  done(kegToDeselect) {
    kegToDeselect.currentSelect = false;
  }

  addKeg(keg) {
    this.masterKegList.push(keg);
  }

}
