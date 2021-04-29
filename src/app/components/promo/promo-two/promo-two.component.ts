import { Component, Input, OnInit } from '@angular/core';
import { Promo } from '../promo.model';

@Component({
  selector: 'app-promo-two',
  templateUrl: './promo-two.component.html'
})
export class PromoTwoComponent implements OnInit {
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
