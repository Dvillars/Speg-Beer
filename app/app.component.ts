import { Component } from '@angular/core';
import { Keg } from './objects/keg';
import { KEGS } from './models/mock-kegs';
import { UpdateComponent } from './keg-update.component';

@Component({
  selector: 'app-root',
  templateUrl: '../app/views/root.html'
})

export class AppComponent{
  selectedKeg = null;
  kegs: Keg[] = KEGS;

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
