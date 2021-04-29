import { Component, Input, OnInit } from '@angular/core';
import { Promo } from '../promo.model';

@Component({
  selector: 'app-promo-one',
  templateUrl: './promo-one.component.html'
})
export class PromoOneComponent implements OnInit {
  @Input('view') view: string = "preview";

  promo: Promo = new Promo();

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
