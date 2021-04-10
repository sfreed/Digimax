import { Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

export class Card{
  type: string;
  name: string;
}
@Component({
  selector: 'app-agent-page-administration',
  templateUrl: './agent-page-administration.component.html',
  styleUrls: ['./agent-page-administration.component.css']
})
export class AgentPageAdministrationComponent implements OnInit {
  header: Card;
  footer: Card;
  
  cards: Card[] = [];

  imageSelectVisible = false;
  confirmPageSaveVisible = false;
  confirmPageCancelVisible = false
  previewSection = false;

  constructor(private route: ActivatedRoute,
    public ngZone: NgZone,
    public router: Router,) {
    this.onReorder = this.onReorder.bind(this);
  }

  ngOnInit(): void {}

  addHeader(type, name){
    let card: Card = new Card();
    card.type = type;
    card.name = name
    this.header = card;
  }

  addCard(type, name){
    let card: Card = new Card();
    card.type = type;
    card.name = name
    this.cards.push(card);
  }

  addFooter(type, name){
    let card: Card = new Card();
    card.type = type;
    card.name = name
    this.footer = card;
  }

  returnToPageAdministrator(){
    this.ngZone.run(() => {
      this.router.navigate(['/admin/page-administration']);
    });
  }

  showSavePopup(){
    this.confirmPageSaveVisible = true;
  }

  showCancelPopup(){
    this.confirmPageCancelVisible = true;
  }

  saveChanges(){
    this.returnToPageAdministrator();

    this.closeSaveChanges();
  }

  closeSaveChanges(){
    this.confirmPageSaveVisible = false;
  }

  cancelChanges(){
    this.closeCancelChanges();
    this.returnToPageAdministrator();
  }

  closeCancelChanges(){
    this.confirmPageCancelVisible = false;
  }

  onReorder(e) {
    var visibleRows = e.component.getVisibleRows(),
        toIndex = this.cards.indexOf(visibleRows[e.toIndex].data),
        fromIndex = this.cards.indexOf(e.itemData);

    this.cards.splice(fromIndex, 1);
    this.cards.splice(toIndex, 0, e.itemData);
  }

  showPreview(){
    this.previewSection = true;
  }
  closePreview(){
    this.previewSection = false;
  }

}
