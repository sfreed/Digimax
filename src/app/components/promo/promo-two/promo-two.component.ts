import { Component, OnInit } from '@angular/core';
import { Promo } from '../promo.model';

@Component({
  selector: 'app-promo-two',
  templateUrl: './promo-two.component.html'
})
export class PromoTwoComponent implements OnInit {
  promo: Promo = new Promo();

  constructor() { }

  ngOnInit(): void {
  }

}
