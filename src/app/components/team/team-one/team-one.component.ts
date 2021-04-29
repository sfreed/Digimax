import { Component, Input, OnInit } from '@angular/core';
import { SectionList } from '../../components.model';
import { Team } from '../team.model';

@Component({
  selector: 'app-team-one',
  templateUrl: './team-one.component.html'
})
export class TeamOneComponent implements OnInit {
  @Input('view') view: string = "preview";

  team: Team = new Team();

  constructor() { }

  ngOnInit(): void {
    let sectionList: SectionList = new SectionList();
    this.team.sectionList.push(sectionList);
  }

  showConfigure() {
    this.view = 'edit';
  }
  showPreview() {
    this.view = 'preview';
  }

}
