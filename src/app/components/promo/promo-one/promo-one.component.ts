import { Component, OnInit } from '@angular/core';
import { Promo } from '../promo.model';

@Component({
  selector: 'app-promo-one',
  templateUrl: './promo-one.component.html'
})
export class PromoOneComponent implements OnInit {
  promo: Promo = new Promo();

  constructor() { }

  ngOnInit(): void {
   
  }

}
