import { Component, Input, OnInit } from '@angular/core';
import { Button, SectionList } from '../../components.model';
import { Review } from '../review.model';

@Component({
  selector: 'app-review-three',
  templateUrl: './review-three.component.html'
})
export class ReviewThreeComponent implements OnInit {
  @Input('view') view: string = "preview";

  review: Review = new Review();

  constructor() { }

  ngOnInit(): void {
    let sectionList: SectionList = new SectionList();
    this.review.sectionList.push(sectionList);

    
    let button: Button = new Button();
    this.review.buttons.push(button);
  }

  showConfigure() {
    this.view = 'edit';
  }
  showPreview() {
    this.view = 'preview';
  }

}
