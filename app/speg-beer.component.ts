import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './objects/keg';
import { UpdateComponent } from './keg-update.component';


@Component({
  selector: 'speg-beer',
  templateUrl: '../app/views/speg.html'
})


export class SpegComponent {
@Input() kegs: Keg[];
@Output() doneClick = new EventEmitter();
@Output() addSaleClick = new EventEmitter();

selectedKeg = null;

done(kegToDeselect: Keg) {
  this.selectedKeg = null;
  this.doneClick.emit(kegToDeselect);
}

addSale(price: number) {
  this.addSaleClick.emit(price);
}

selectKeg(keg: Keg) {
  this.kegs.forEach(function(keg) {
    keg.currentSelect = false;
  });
  this.selectedKeg = keg;
  this.selectedKeg.currentSelect = true;
}


checkStatus(keg: Keg) {
  var status1: string = "";
  var status2: string = "";
  var status3: string = "";
  if(keg.currentSelect) {
    status1 = "selected";
  }
  else {
    status1 = "unselected";
  }

  if(keg.pints <= 10) {
    status2 = "low-content";
  }
  else {
    status2 = "";
  }

  if(keg.spegContent > 14) {
    status3 = 'high-speg';
  }
  else {
    status3 = 'normal-speg';
  }

  return status1 + " "+ status2 + " " + status3;
}


}
