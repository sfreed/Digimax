import { Component, OnInit } from '@angular/core';
import { Button } from '../../components.model';
import { Marketing, Portfolio } from '../portfolio.model';

@Component({
  selector: 'app-portfolio-five',
  templateUrl: './portfolio-five.component.html'
})
export class PortfolioFiveComponent implements OnInit {
  portfolio: Portfolio = new Portfolio();

  constructor() { }

  ngOnInit(): void {
    let buttons: Button = new Button();
    this.portfolio.buttons.push(buttons);
    
    let marketing: Marketing = new Marketing();
    this.portfolio.marketing.push(marketing);

  }

}
