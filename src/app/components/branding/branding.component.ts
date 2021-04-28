import { Component, OnInit } from '@angular/core';
import { SectionList } from '../components.model';
import { Branding, PartnerImages } from './branding.model';

@Component({
  selector: 'app-branding',
  templateUrl: './branding.component.html'
})
export class BrandingComponent implements OnInit {
  branding: Branding = new Branding();

  constructor() { }

  ngOnInit(): void {
    let img: PartnerImages = new PartnerImages();
    img.url = "assets/img/brand_partner_1.png";
    this.branding.partnerUrls.push(img);

    let sectionList: SectionList = new SectionList();
    this.branding.sectionList.push(sectionList);
  }

}
