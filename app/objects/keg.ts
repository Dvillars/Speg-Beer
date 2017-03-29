export class Keg {
  public pints: number = 12;
  public currentSelect: boolean = false;
  constructor(public name: string, public brand: string, public price: string, public spegContent: number) { };
}
