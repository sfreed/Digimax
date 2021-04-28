import { Component, OnInit } from '@angular/core';
import { SectionList } from '../../components.model';
import { Pricing } from '../pricing.model';

@Component({
  selector: 'app-pricing-three',
  templateUrl: './pricing-three.component.html'
})
export class PricingThreeComponent implements OnInit {
  pricing: Pricing = new Pricing();

  constructor() { }

  ngOnInit(): void {
    let sectionList: SectionList = new SectionList();
    this.pricing.sectionList.push(sectionList);
  }

}
