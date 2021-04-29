import { Component, Input, OnInit } from '@angular/core';
import { SectionList, Button } from '../../components.model';
import { Hero, Image } from '../hero.model';

@Component({
  selector: 'app-hero-three',
  templateUrl: './hero-three.component.html'
})
export class HeroThreeComponent implements OnInit {
  @Input('view') view: string = "preview";

  hero: Hero = new Hero();

  constructor() { }

  ngOnInit(): void {
    let sectionList: SectionList = new SectionList();
    this.hero.sectionList.push(sectionList);

    let buttons: Button = new Button();
    this.hero.buttons.push(buttons);


    let image: Image = new Image();
    image.url640x410 = "assets/img/welcome_thumb_7.png";
    image.url410x269 = "assets/img/welcome_thumb_8.png";
    image.url411x261 = "assets/img/welcome_thumb_9.png";
    this.hero.images.push(image);
  }

  showConfigure() {
    this.view = 'edit';
  }
  showPreview() {
    this.view = 'preview';
  }

}
