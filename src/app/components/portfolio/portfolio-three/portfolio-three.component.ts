import { Component, OnInit } from '@angular/core';
import { Button } from '../../components.model';
import { Marketing, Portfolio } from '../portfolio.model';

@Component({
  selector: 'app-portfolio-three',
  templateUrl: './portfolio-three.component.html'
})
export class PortfolioThreeComponent implements OnInit {
  portfolio: Portfolio = new Portfolio();

  constructor() { }

  ngOnInit(): void {
    
    let buttons: Button = new Button();
    this.portfolio.buttons.push(buttons);
    
    let marketing: Marketing = new Marketing();
    this.portfolio.marketing.push(marketing);

  }

}
