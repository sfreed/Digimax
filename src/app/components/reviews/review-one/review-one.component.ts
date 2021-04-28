import { Component, OnInit } from '@angular/core';
import { SectionList } from '../../components.model';
import { Review } from '../review.model';

@Component({
  selector: 'app-review-one',
  templateUrl: './review-one.component.html'
})
export class ReviewOneComponent implements OnInit {
  review: Review = new Review();

  constructor() { }

  ngOnInit(): void {
    let sectionList: SectionList = new SectionList();
    this.review.sectionList.push(sectionList);
  }

}
