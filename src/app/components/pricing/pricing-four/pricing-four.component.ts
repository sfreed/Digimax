import { Component, OnInit } from '@angular/core';
import { Pricing } from '../pricing.model';

@Component({
  selector: 'app-pricing-four',
  templateUrl: './pricing-four.component.html'
})
export class PricingFourComponent implements OnInit {
  pricing: Pricing = new Pricing();

  constructor() { }

  ngOnInit(): void {
  
  }

}
