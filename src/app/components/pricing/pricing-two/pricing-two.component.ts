import { Component, OnInit } from '@angular/core';
import { SectionList } from '../../components.model';
import { Pricing } from '../pricing.model';

@Component({
  selector: 'app-pricing-two',
  templateUrl: './pricing-two.component.html'
})
export class PricingTwoComponent implements OnInit {
  pricing: Pricing = new Pricing();

  constructor() { }

  ngOnInit(): void {
    let sectionList: SectionList = new SectionList();
    this.pricing.sectionList.push(sectionList);
  }

}
