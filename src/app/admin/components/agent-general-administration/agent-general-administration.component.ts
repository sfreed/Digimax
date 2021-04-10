import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DxListComponent } from 'devextreme-angular';
import { Website, WebsiteService } from '../../services/website.service';


@Component({
  selector: 'app-agent-general-administration',
  templateUrl: './agent-general-administration.component.html',
  styleUrls: ['./agent-general-administration.component.scss']
})
export class AgentGeneralAdministrationComponent implements OnInit {
  @ViewChild('list') list: DxListComponent;

  website: Promise<Website>;
  admins: Promise<string[]>;
  viewConfig = false;
  addButtonOptions: any;
  allowDeleting: boolean = false;
  viewConfirm = false;
  currentDbId: string;
  

  constructor(private route: ActivatedRoute, private websiteService: WebsiteService) { 
      this.addButtonOptions = {
        icon: 'plus',
        onClick: () => {
            this.viewConfig = true;
        }
      };
    }

  ngOnInit() {
    this.websiteService.current_web_site_name = this.route.snapshot.paramMap.get('agent_name');

    this.websiteService.getWebsiteById().get().subscribe(wss => {
       this.website = new Promise(resolve => resolve(wss.data()));
    })  

     this.websiteService.getWebsiteAdmins().subscribe(admins => {
       let a: string[] = [];
       admins.forEach(element => {
         a.push(element);
       });
       this.admins = new Promise (resolve => resolve(a))});
    
  }

  saveAgentInfo() {
    this.website.then(ws => {
      this.websiteService.updateWebsite(ws);
    })
  }

  saveEmail(email: string) {
    this.websiteService.createWebsiteAdmin({email: email});
    this.viewConfig = false;
  }

  showEmailDelete(e) {
    this.viewConfirm = true;
    this.currentDbId = e.itemData.dbId;
  }

  onEmailDelete(e) {
    this.websiteService.deleteWebsiteAdmin(this.currentDbId);
    this.viewConfirm = false;
    
  }
  cancelEmail(e) {
    this.viewConfirm = false;
    this.websiteService.getWebsiteAdmins().subscribe(admins => {
      let a: string[] = [];
      admins.forEach(element => {
        console.log(element);
        a.push(element);
      });
      this.admins = new Promise (resolve => resolve(a))});
  }
}


