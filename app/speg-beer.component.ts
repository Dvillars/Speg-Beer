import { Component, Input } from '@angular/core';
import { Keg } from './objects/keg';
import { UpdateComponent } from './keg-update.component';


@Component({
  selector: 'speg-beer',
  templateUrl: '../app/views/speg.html'
})


export class SpegComponent {
@Input() kegs: Keg[];
selectedKeg = null;

selectKeg(keg) {
  this.kegs.forEach(function(keg) {
    keg.currentSelect = false;
  });
  this.selectedKeg = keg;
  this.selectedKeg.currentSelect = true;
}

checkSelected(keg) {
  if(keg.currentSelect) {
    return "selected";
  }
  else {
    return "unselected";
  }
}

checkStatus(pints) {
  if(pints <= 10) {
    return "bg-warning";
  }
  else {
    return "bg-default";
  }
}

done() {
  this.selectedKeg.currentSelect = false;
  this.selectedKeg = null;
}

checkSpegContent(content) {
  if(content > 14) {
    return 'high-speg';
  }
  else {
    return 'normal-speg';
  }
}
}
