import { Component, OnInit } from '@angular/core';
import { Team } from '../team.model';

@Component({
  selector: 'app-team-two',
  templateUrl: './team-two.component.html'
})
export class TeamTwoComponent implements OnInit {
  team: Team = new Team();

  constructor() { }

  ngOnInit(): void {
  }

}
