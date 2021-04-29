import { Component, Input, OnInit } from '@angular/core';
import { SectionList, Button } from '../../components.model';
import { Hero } from '../hero.model';

@Component({
  selector: 'app-hero-four',
  templateUrl: './hero-four.component.html'
})
export class HeroFourComponent implements OnInit {
  @Input('view') view: string = "preview";

  hero: Hero = new Hero();

  constructor() { }

  ngOnInit(): void {
    let sectionList: SectionList = new SectionList();
    this.hero.sectionList.push(sectionList);

    let buttons: Button = new Button();
    this.hero.buttons.push(buttons);

  }

  showConfigure() {
    this.view = 'edit';
  }
  showPreview() {
    this.view = 'preview';
  }

}
