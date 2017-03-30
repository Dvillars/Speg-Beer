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


  happyHourToggle() {
    if(this.happyHour) {
      this.masterKegList.forEach(function(keg){
        keg.price = keg.price * 2;
      })
      this.happyHour = !this.happyHour;
    } else {
      this.masterKegList.forEach(function(keg){
        keg.price = keg.price / 2;
      });
      this.happyHour = !this.happyHour;
    }
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
