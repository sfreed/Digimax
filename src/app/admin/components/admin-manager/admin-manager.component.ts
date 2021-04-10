import { Component, OnInit } from '@angular/core';
import { Tab } from '../../models/tab.model';

@Component({
  selector: 'app-admin-manager',
  templateUrl: './admin-manager.component.html',
  styleUrls: ['./admin-manager.component.css']
})
export class AdminManagerComponent implements OnInit {
  breadCrumbItems: Array<{}>;

  tabs: Tab[] = [{
    id: 0,
    text: "General Administration",
    icon: "user",
    template: "General Administration", 
  },{
    id: 1,
    text: "Menu Administration",
    icon: "user",
    template: "Menu Administration", 
  },{
    id: 2,
    text: "Card Administration",
    icon: "user",
    template: "Card Administration", 
  },{
    id: 3,
    text: "Page Administration",
    icon: "user",
    template: "Page Administration", 
  }];

  editorOptions: {
    colSpan: 2
  };

  selectedTab: string = 'Page Administration';
  
  constructor() { }

  ngOnInit(): void {
    
    this.breadCrumbItems = [{ label: 'Admin' }, { label: 'My Administration Portal', active: true }];

  }

  selectTab(e){
    this.selectedTab = e.itemData.template;
  }
}
