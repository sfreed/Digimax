import { Component, OnInit } from '@angular/core';
import { Button } from '../../components.model';
import { Service } from '../service.model';

@Component({
  selector: 'app-service-five',
  templateUrl: './service-five.component.html'
})
export class ServiceFiveComponent implements OnInit {
  service: Service = new Service();

  constructor() { }

  ngOnInit(): void {
    let buttons: Button = new Button();
    this.service.buttons.push(buttons);
  }

}
