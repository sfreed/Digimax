import { Component, OnInit } from '@angular/core';
import { SectionList, Button } from '../../components.model';
import { Hero, Image } from '../hero.model';

@Component({
  selector: 'app-hero-six',
  templateUrl: './hero-six.component.html'
})
export class HeroSixComponent implements OnInit {
  hero: Hero = new Hero();

  constructor() { }

  ngOnInit(): void {
    let sectionList: SectionList = new SectionList();
    this.hero.sectionList.push(sectionList);

    let buttons: Button = new Button();
    this.hero.buttons.push(buttons);


    let image: Image = new Image();
    image.url342x400 = "assets/img/welcome_thumb_1.png";
    image.url131x300 = "assets/img/welcome_thumb_2.png";
    image.url139x300 = "assets/img/welcome_thumb_3.png";
    image.url150x112 = "assets/img/welcome_thumb_4.png";
    image.url150x95 = "assets/img/welcome_thumb_5.png";
    image.url60x63 = "assets/img/welcome_thumb_6.png";
    this.hero.images.push(image);
  }

}
