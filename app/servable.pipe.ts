import { Pipe, PipeTransform } from '@angular/core';
import { Keg } from './objects/keg';

@Pipe({
  name: "servable",
  pure: false
})

export class ServablePipe implements PipeTransform {
  transform(input: Keg[], args) {
    var output: Keg[] = [];
    for(var i = 0; i < input.length; i++){
      if(input[i].pints >= 1) {

        output.push(input[i]);
      }
    }
    return output;
  }
}
