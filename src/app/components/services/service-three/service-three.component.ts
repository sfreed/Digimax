import { Component, Input, OnInit } from '@angular/core';
import { Service } from '../service.model';
import { Button, SectionList } from '../../components.model';

@Component({
  selector: 'app-service-three',
  templateUrl: './service-three.component.html'
})
export class ServiceThreeComponent implements OnInit {
  @Input('view') view: string = "preview";
  
  service: Service = new Service();

  constructor() { }

  ngOnInit(): void {
    let sectionList: SectionList = new SectionList();
    this.service.sectionList.push(sectionList);

    let buttons: Button = new Button();
    this.service.buttons.push(buttons);
  }
  
  showConfigure() {
    this.view = 'edit';
  }
  showPreview() {
    this.view = 'preview';
  }

}
