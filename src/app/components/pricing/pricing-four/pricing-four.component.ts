import { Component, Input, OnInit } from '@angular/core';
import { Pricing } from '../pricing.model';

@Component({
  selector: 'app-pricing-four',
  templateUrl: './pricing-four.component.html'
})
export class PricingFourComponent implements OnInit {
  @Input('view') view: string = "preview";

  pricing: Pricing = new Pricing();

  constructor() { }

  ngOnInit(): void {
  
  }
  showConfigure() {
    this.view = 'edit';
  }
  showPreview() {
    this.view = 'preview';
  }


}
