import { Component, Input, OnInit } from '@angular/core';
import { SectionList } from '../components.model';
import { AboutUs, Counter } from './about-us.model';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html'
})
export class AboutUsComponent implements OnInit {
  @Input('view') view: string = "preview";

  aboutUs: AboutUs = new AboutUs();

  constructor() { }

  ngOnInit(): void {
    let sectionList: SectionList = new SectionList();
    this.aboutUs.sectionList.push(sectionList);

    let counterList: Counter = new Counter();
    this.aboutUs.counterList.push(counterList);
  }

  showConfigure() {
    this.view = 'edit';
  }
  showPreview() {
    this.view = 'preview';
  }

  addListItem() {
    let counterList: Counter = new Counter();
    this.aboutUs.counterList.push(counterList);
  }
  deleteListItem(i) {
    this.aboutUs.counterList.splice(i, 1);
  }

}
