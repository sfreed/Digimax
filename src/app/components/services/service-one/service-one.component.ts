import { Component, OnInit } from '@angular/core';
import { Button, SectionList } from '../../components.model';
import { Service } from '../service.model';

@Component({
  selector: 'app-service-one',
  templateUrl: './service-one.component.html'
})
export class ServiceOneComponent implements OnInit {
  service: Service = new Service();

  constructor() { }

  ngOnInit(): void {
    let sectionList: SectionList = new SectionList();
    this.service.sectionList.push(sectionList);

    let buttons: Button = new Button();
    this.service.buttons.push(buttons);
  }

}
