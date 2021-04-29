import { Component, Input, OnInit } from '@angular/core';
import { Team } from '../team.model';

@Component({
  selector: 'app-team-two',
  templateUrl: './team-two.component.html'
})
export class TeamTwoComponent implements OnInit {
  @Input('view') view: string = "preview";

  team: Team = new Team();

  constructor() { }

  ngOnInit(): void {
  }

  showConfigure() {
    this.view = 'edit';
  }
  showPreview() {
    this.view = 'preview';
  }

}
