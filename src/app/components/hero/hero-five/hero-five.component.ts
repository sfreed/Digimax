import { Component, Input, OnInit } from '@angular/core';
import { SectionList, Button } from '../../components.model';
import { Hero, Image } from '../hero.model';

@Component({
  selector: 'app-hero-five',
  templateUrl: './hero-five.component.html'
})
export class HeroFiveComponent implements OnInit {
  @Input('view') view: string = "preview";

  hero: Hero = new Hero();

  constructor() { }

  ngOnInit(): void {
    let sectionList: SectionList = new SectionList();
    this.hero.sectionList.push(sectionList);

    let buttons: Button = new Button();
    this.hero.buttons.push(buttons);

    let image: Image = new Image();
    image.url373x437 = "assets/img/welcome_thumb_11.png";
    image.url237x281 = "assets/img/welcome_thumb_12.png";
    this.hero.images.push(image);
  }
  showConfigure() {
    this.view = 'edit';
  }
  showPreview() {
    this.view = 'preview';
  }

}
