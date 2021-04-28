import { Component, OnInit } from '@angular/core';
import { Service } from '../service.model';
import { Button, SectionList } from '../../components.model';

@Component({
  selector: 'app-service-six',
  templateUrl: './service-six.component.html'
})
export class ServiceSixComponent implements OnInit {
  service: Service = new Service();

  constructor() { }

  ngOnInit(): void {
    let sectionList: SectionList = new SectionList();
    this.service.sectionList.push(sectionList);

    let buttons: Button = new Button();
    this.service.buttons.push(buttons);
  }

}
