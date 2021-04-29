import { Component, Input, OnInit } from '@angular/core';
import { SectionList } from '../../components.model';
import { Pricing } from '../pricing.model';

@Component({
  selector: 'app-pricing-three',
  templateUrl: './pricing-three.component.html'
})
export class PricingThreeComponent implements OnInit {
  @Input('view') view: string = "preview";

  pricing: Pricing = new Pricing();

  constructor() { }

  ngOnInit(): void {
    let sectionList: SectionList = new SectionList();
    this.pricing.sectionList.push(sectionList);
  }
  showConfigure() {
    this.view = 'edit';
  }
  showPreview() {
    this.view = 'preview';
  }


}
