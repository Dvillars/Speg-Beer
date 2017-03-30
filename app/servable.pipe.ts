import { Pipe, PipeTransform } from '@angular/core';
import { Keg } from './objects/keg';

@Pipe({
  name: "servable",
  pure: false
})

export class ServablePipe implements PipeTransform {


  transform(input: Keg[], desiredServableness) {
    var output: Keg[] = [];
    if(desiredServableness === "servableKegs"){
      for(var i = 0; i < input.length; i++){
        if(input[i].pints >= 1) {
          output.push(input[i]);
        }
      }
      return output;
    } else if(desiredServableness === "emptyKegs") {
      for(var i = 0; i < input.length; i++){
        if(input[i].pints === 0) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
