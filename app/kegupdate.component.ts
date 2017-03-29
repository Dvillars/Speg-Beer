import { Component, Input } from '@angular/core';
import { Keg } from './objects/keg';

@Component ({
  selector: 'kegUpdate',
  template: `
  <button class='btn btn-warning' (click)="servePint(keg)">Serve Pint</button>
  <button class='btn btn-warning' (click)="updateForm = !updateForm">{{updateForm ? 'Save' : 'Edit'}}</button>
  <div *ngIf="updateForm">
    <input [(ngModel)]='keg.name' type='text' placeholder='Brand:'>
    <input [(ngModel)]='keg.price' type='text' placeholder='Price:'>
    <input [(ngModel)]='keg.spegContent' type='text' placeholder='Speghet:'>
  </div>
  `
})

export class UpdateComponent{
  @Input() keg: Keg;
  servePint(keg) {
    keg.pints-= 1;
  }
}
