import { Component, Input, OnInit } from '@angular/core';
import { SectionList } from '../../components.model';
import { Team, TeamMember } from '../team.model';

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
