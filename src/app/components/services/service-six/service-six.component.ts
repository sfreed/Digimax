import { Component, Input, OnInit } from '@angular/core';
import { Service } from '../service.model';
import { Button, SectionList } from '../../components.model';

@Component({
  selector: 'app-service-six',
  templateUrl: './service-six.component.html'
})
export class ServiceSixComponent implements OnInit {
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
