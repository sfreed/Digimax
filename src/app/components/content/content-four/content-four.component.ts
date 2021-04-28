import { Component, OnInit } from '@angular/core';
import { Button, SectionList } from '../../components.model';
import { Content, ContentImages, ContentList } from '../content.model';

@Component({
  selector: 'app-content-four',
  templateUrl: './content-four.component.html'
})
export class ContentFourComponent implements OnInit {
  content: Content = new Content();

  constructor() { }

  ngOnInit(): void {
    let content: ContentList = new ContentList();
    this.content.contentList.push(content);

    let sectionList: SectionList = new SectionList();
    this.content.sectionList.push(sectionList);

    let buttons: Button = new Button();
    this.content.buttons.push(buttons);

    let img: ContentImages = new ContentImages();
    this.content.contentImages.push(img);
  }
}
