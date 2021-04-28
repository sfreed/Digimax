import { Component, OnInit } from '@angular/core';
import { SectionList, Button } from '../components.model';
import { CTA } from './cta.model';

@Component({
  selector: 'app-cta',
  templateUrl: './cta.component.html'
})
export class CtaComponent implements OnInit {
  cta: CTA = new CTA();

  constructor() { }

  ngOnInit(): void {
    let sectionList: SectionList = new SectionList();
    this.cta.sectionList.push(sectionList);

    let buttons: Button = new Button();
    this.cta.buttons.push(buttons);

  }

}
