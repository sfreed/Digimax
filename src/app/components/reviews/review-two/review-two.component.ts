import { Component, OnInit } from '@angular/core';
import { Button, SectionList } from '../../components.model';
import { Review } from '../review.model';

@Component({
  selector: 'app-review-two',
  templateUrl: './review-two.component.html'
})
export class ReviewTwoComponent implements OnInit {
  review: Review = new Review();

  constructor() { }

  ngOnInit(): void {
    let sectionList: SectionList = new SectionList();
    this.review.sectionList.push(sectionList);

    let button: Button = new Button();
    this.review.buttons.push(button);
  }

}
