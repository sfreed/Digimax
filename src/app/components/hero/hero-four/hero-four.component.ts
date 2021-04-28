import { Component, OnInit } from '@angular/core';
import { SectionList, Button } from '../../components.model';
import { Hero } from '../hero.model';

@Component({
  selector: 'app-hero-four',
  templateUrl: './hero-four.component.html'
})
export class HeroFourComponent implements OnInit {
  hero: Hero = new Hero();

  constructor() { }

  ngOnInit(): void {
    let sectionList: SectionList = new SectionList();
    this.hero.sectionList.push(sectionList);

    let buttons: Button = new Button();
    this.hero.buttons.push(buttons);

  }

}
