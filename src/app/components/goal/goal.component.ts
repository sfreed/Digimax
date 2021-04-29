import { Component, Input, OnInit } from '@angular/core';
import { SectionList, Button } from '../components.model';
import { Goals } from './goal.model';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html'
})
export class GoalComponent implements OnInit {
  @Input('view') view: string = "preview";

  goal: Goals = new Goals();

  constructor() { }

  ngOnInit(): void {
    let sectionList: SectionList = new SectionList();
    this.goal.sectionList.push(sectionList);

    let buttons: Button = new Button();
    this.goal.buttons.push(buttons);
    
    this.goal.goalThumBUrl = "assets/img/about_thumb_2.jpg";
  }

  showConfigure() {
    this.view = 'edit';
  }
  showPreview() {
    this.view = 'preview';
  }


}
