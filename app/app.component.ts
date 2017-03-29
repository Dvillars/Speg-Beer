import { Component } from '@angular/core';
import { Keg } from './objects/keg';
import { KEGS } from './models/mock-kegs';
import { UpdateComponent } from './keg-update.component';

@Component({
  selector: 'app-root',
  templateUrl: '../app/views/root.html'
})

export class AppComponent{
  kegs: Keg[] = KEGS;

  checkStatus(pints) {
    if(pints <= 10) {
      return "bg-warning";
    }
    else {
      return "bg-default";
    }
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
