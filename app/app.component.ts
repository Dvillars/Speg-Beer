import { Component } from '@angular/core';
import { Keg } from './objects/keg';
import { KEGS } from './models/mock-kegs';


@Component({
  selector: 'app-root',
  templateUrl: '../app/views/root.html'
})

export class AppComponent{
  masterKegList: Keg[] = KEGS;

  done(kegToDeselect) {
    kegToDeselect.currentSelect = false;
  }

}
