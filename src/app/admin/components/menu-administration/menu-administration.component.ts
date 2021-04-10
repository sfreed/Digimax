import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Page } from '../../models/page.model';
import { Tab } from '../../models/tab.model';
import { MenuItem } from '../../models/menu.model';
import { WebsiteService } from '../../services/website.service';
import CustomStore from 'devextreme/data/custom_store';


@Component({
  selector: 'app-menu-administration',
  templateUrl: './menu-administration.component.html',
  styleUrls: ['./menu-administration.component.scss']
})
export class MenuAdministrationComponent implements OnInit {
  breadCrumbItems: Array<{}>;

  tabs: Tab[] = [{
    id: 0,
    text: "Material Design Icons",
    icon: "user",
    template: "MaterialDesign", 
  },{
    id: 1,
    text: "FontAwesome Icons",
    icon: "user",
    template: "FontAwesome", 
  },{
    id: 2,
    text: "Drip Icons",
    icon: "user",
    template: "Drip", 
  },{
    id: 3,
    text: "Remix Icons",
    icon: "user",
    template: "Remix", 
  }];

  selectedTab: string = 'MaterialDesign';

  menuItems: MenuItem[] = [];
  allowDropInsideItem: boolean = true;
  allowReordering: boolean = true;
  showDragIcons: boolean = true;

  pageSelectVisible = false;
  pageExternalSelectVisible = false;
  confirmPageSaveVisible = false;
  confirmPageCancelVisible = false;
  createFolderVisible = false;
  createRootFolderVisible = false;
  showIconList=false;

  pageList:Page[] = [];

  selectedPage: Page[] = [{...new Page()}];

  menuItemsToDelete: string[] = [];

  dataSource: any;

  root_menu_id: string;

  constructor(private websiteService: WebsiteService, public toster: ToastrService) {
    this.dataSource = new CustomStore({
      key: "dbId",
      loadMode: "raw",
      load: function (loadOptions: any) {
        return new Promise((resolve, reject) => {
          websiteService.getWebsiteMenuItems().subscribe(snaps => {            
            resolve(snaps);
          });
        });
      },
      insert: function(value: MenuItem) {
        return websiteService.createMenuItem(value);
      },
      update: function(key: any, value: MenuItem) {
        return websiteService.updateMenuItem(value);
      },
      remove: function (id: any) {
        return websiteService.deleteMenuItem(id);
      },
      
    });

    this.onReorder = this.onReorder.bind(this);
  }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Admin' }, { label: 'Menu Administration', active: true }];
  }
  
  onDragChange(e) {
    let visibleRows = e.component.getVisibleRows(),
        sourceNode = e.component.getNodeByKey(e.itemData.id),
        targetNode = visibleRows[e.toIndex].node;

    while(targetNode && targetNode.data) {
      if (targetNode.data.id === sourceNode.data.id) {
          e.cancel = true;
          break;
      }
      targetNode = targetNode.parent;
    }
  }

  onReorder(e) {
    let visibleRows =  e.component.getVisibleRows(),
      sourceData = e.itemData,
      targetData = visibleRows[e.toIndex].data;

    if (e.dropInsideItem) {
      //destination is not a branch item
      if(!this.menuItems[this.menuItems.indexOf(targetData)].items){
        return;
      }
      sourceData.parentId = targetData.id;
      e.component.refresh();
    } else {
      let sourceIndex = this.menuItems.indexOf(sourceData),
          targetIndex = this.menuItems.indexOf(targetData);

      if (sourceData.parentId !== targetData.parentId) {
          sourceData.parentId = targetData.parentId;
          if (e.toIndex > e.fromIndex) {
              targetIndex++;
          }
      }

      sourceData.order=targetIndex;
      targetData.order=sourceIndex;
      this.menuItems.splice(sourceIndex, 1);
      this.menuItems.splice(targetIndex, 0, sourceData);
    }
  }

  onFocusedRowChanged(e) {
    this.websiteService.parent_item = e.row.data; 
  }
  
  selectTab(e){
    this.selectedTab = e.itemData.template;
  }

  onRowUpdating(options) {
    options.newData = Object.assign(options.oldData, options.newData);
  }

  onRowRemoving(e){
    console.log(e);
  }
}
