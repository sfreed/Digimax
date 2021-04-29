import { Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import config from "devextreme/core/config";
import { Section, sections, sectionType, SectionType } from '../config/template-list';
import { TemplateWizardService } from '../services/template-wizard.service';

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
  cards: Card[] = [];
  selectedCard: Card;

  imageSelectVisible = false;
  confirmPageSaveVisible = false;
  confirmPageCancelVisible = false
  previewSection = false;
  sectionPreviewVisible = false;

  mode='edit'

  sectionTypes: SectionType [] = [] ;
  sections: Section[]

  constructor(private route: ActivatedRoute,
    public ngZone: NgZone,
    public router: Router,
    private wizard: TemplateWizardService) 
  {
    this.onReorder = this.onReorder.bind(this);
    config().floatingActionButtonConfig.position = { at: "right top", my: "right top", offset: "-10 5" };
    this.sections = sections;
    this.sectionTypes = sectionType;
    
    this.getFilteredSections = this.getFilteredSections.bind(this);
  }

  ngOnInit(): void {
    this.wizard.selectedTemplate.subscribe(selectedTemplate => {
      selectedTemplate.sections.forEach(section => {
        this.cards.push({type: section.split("-")[0], name: section})
      })
    })
  }

  addCard(type, name){
    let card: Card = new Card();
    card.type = type;
    card.name = name
    this.cards.push(card);
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

  showPreview(e){
    this.selectedCard = e.row.data;
    this.previewSection = true;
  }

  closePreview(){
    this.previewSection = false;
  }

  showSectionPreview(e){
    console.log(e);
    this.selectedCard = e.row.data;
    this.sectionPreviewVisible = true;
  }

  closeSectionPreview(){
    this.sectionPreviewVisible = false;
  }

  switchMode(val: string){
    this.mode=val;
  }

  getFilteredSections(options) {
    return {
        store: this.sections,
        filter: options.data ? ["type", "=", options.data.type] : null
    };
  }

  onEditorPreparing(e) {
    if(e.parentType === "dataRow" && e.dataField === "name") {
        e.editorOptions.disabled = (typeof e.row.data.type !== "string");
    }
  }

  setTypeValue(rowData: any, value: any): void {
      rowData.name = null;
      (<any>this).defaultSetCellValue(rowData, value);
  }

}
