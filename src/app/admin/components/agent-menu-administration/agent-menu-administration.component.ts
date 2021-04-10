import { Component, OnInit } from '@angular/core';
import CustomStore from 'devextreme/data/custom_store';
import { ToastrService } from 'ngx-toastr';
import { Page } from '../../models/page.model';
import { MenuItem } from '../../models/menu.model';
import { WebsiteService } from '../../services/website.service';


@Component({
  selector: 'app-agent-menu-administration',
  templateUrl: './agent-menu-administration.component.html',
  styleUrls: ['./agent-menu-administration.component.scss']
})
export class AgentMenuAdministrationComponent implements OnInit {
  dataSource: any = {};

  selectedItem;

  pageSelectVisible = false;
  pageExternalSelectVisible = false;

  pageList:Page[] = [];

  selectedPage: Page[] = [{...new Page()}];

  menuItemsToDelete: string[] = [];

  constructor(public websiteService: WebsiteService,
    public toster: ToastrService) {
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
        insert: function(value: MenuItem){
          return websiteService.createMenuItem(value);
        },
        update: function(key: any, value: MenuItem) {
          return websiteService.updateMenuItem(value);
        },
        remove: function (id: any) {
          return websiteService.deleteMenuItem(id);
        },
      });
  }

  ngOnInit(): void {}
  
  selectPage(e){
    this.closePageWindow();

  }

  addExternalPage(e){
    this.closeExternalPageWindow();
  }

  onFocusedRowChanged(e) {
    this.selectedItem = e.row.data;
  }

  closePageWindow(){
    this.pageSelectVisible = false;
  }

  closeExternalPageWindow(){
    this.pageExternalSelectVisible = false;
  }

  onRowUpdating(options) {
    options.newData = Object.assign(options.oldData, options.newData);
  }
}
