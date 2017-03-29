export class Keg {
  public pints: number = 12;
  public currentSelect: boolean = false;
  constructor(public name: string, public brand: string, public price: number, public spegContent: number) { };
}
