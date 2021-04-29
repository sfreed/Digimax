import { Component, Input, OnInit } from '@angular/core';
import { SectionList } from '../../components.model';
import { Review } from '../review.model';

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
  }

  showConfigure() {
    this.view = 'edit';
  }
  showPreview() {
    this.view = 'preview';
  }

}
