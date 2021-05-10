import { Component, Input, OnInit } from '@angular/core';
import { SectionList } from '../../components.model';
import { Review, SingleReview } from '../review.model';

@Component({
  selector: 'app-review-one',
  templateUrl: './review-one.component.html'
})
export class ReviewOneComponent implements OnInit {
  @Input('view') view: string = "preview";

  review: Review = new Review();

  constructor() { }

  ngOnInit(): void {
    let sectionList: SectionList = new SectionList();
    this.review.sectionList.push(sectionList);

    let review: SingleReview = new SingleReview();
    this.review.singleReview.push(review);
  }

  showConfigure() {
    this.view = 'edit';
  }
  showPreview() {
    this.view = 'preview';
  }
  addReview() {
    let review: SingleReview = new SingleReview();
    this.review.singleReview.push(review);
  }
  deleteReview(i) {
    this.review.singleReview.splice(i, 1);
  }

}
