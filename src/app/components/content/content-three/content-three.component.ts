import { Component, OnInit } from '@angular/core';
import { Button, SectionList } from '../../components.model';
import { Content, ContentList } from '../content.model';

@Component({
  selector: 'app-content-three',
  templateUrl: './content-three.component.html'
})
export class ContentThreeComponent implements OnInit {
  content: Content = new Content();

  constructor() { }

  ngOnInit(): void {
    let content: ContentList = new ContentList();
    this.content.contentList.push(content);

    let sectionList: SectionList = new SectionList();
    this.content.sectionList.push(sectionList);

    let buttons: Button = new Button();
    this.content.buttons.push(buttons);

  }

}
