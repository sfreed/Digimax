import { Component, Input, OnInit } from '@angular/core';
import { Team, TeamMember } from '../team.model';

@Component({
  selector: 'app-team-two',
  templateUrl: './team-two.component.html'
})
export class TeamTwoComponent implements OnInit {
  @Input('view') view: string = "preview";

  team: Team = new Team();

  constructor() { }

  ngOnInit(): void {
    let teamMember: TeamMember = new TeamMember();
    this.team.teamMember.push(teamMember);
  }

  showConfigure() {
    this.view = 'edit';
  }
  showPreview() {
    this.view = 'preview';
  }

  addTeamMember() {
    let teamMember: TeamMember = new TeamMember();
    this.team.teamMember.push(teamMember);
  }
  deleteTeamMember(i) {
    this.team.teamMember.splice(i, 1);
  }

}
