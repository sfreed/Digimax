import { Component, OnInit } from '@angular/core';
import { SectionList, Button } from '../../components.model';
import { Marketing, Portfolio } from '../portfolio.model';

@Component({
  selector: 'app-portfolio-one',
  templateUrl: './portfolio-one.component.html'
})
export class PortfolioOneComponent implements OnInit {
  portfolio: Portfolio = new Portfolio(); 

  constructor() { }

  ngOnInit(): void {
    let sectionList: SectionList = new SectionList();
    this.portfolio.sectionList.push(sectionList);
  
    let buttons: Button = new Button();
    this.portfolio.buttons.push(buttons);

    let marketing: Marketing = new Marketing();
    this.portfolio.marketing.push(marketing);

  }

}
