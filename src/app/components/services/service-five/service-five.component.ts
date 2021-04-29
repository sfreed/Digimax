import { Component, Input, OnInit } from '@angular/core';
import { Button } from '../../components.model';
import { Service } from '../service.model';

@Component({
  selector: 'app-service-five',
  templateUrl: './service-five.component.html'
})
export class ServiceFiveComponent implements OnInit {
  @Input('view') view: string = "preview";
  
  service: Service = new Service();

  constructor() { }

  ngOnInit(): void {
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
