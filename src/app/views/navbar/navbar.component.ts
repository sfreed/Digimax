import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { MenuItem } from 'src/app/admin/models/menu.model';
import { Website, WebsiteService } from 'src/app/admin/services/website.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  current_web_site_name: string;

  menuItems: Promise<MenuItem[]>;
  website: Promise<Website>;
  agent_name: string;

  constructor(private route: ActivatedRoute, 
    public websiteService: WebsiteService,
    public cookieService: CookieService) {}

  ngOnInit(): void {
    this.current_web_site_name = this.route.snapshot.queryParamMap.get('site');
  
    this.websiteService.current_web_site_name = this.current_web_site_name;
      
    this.websiteService.getWebsiteByName(this.websiteService.current_web_site_name).subscribe(wss => {
      this.cookieService.set(this.websiteService.cookieId, wss[0].dbId)
      
      this.website = new Promise(resolve => resolve(wss[0]));
      
      this.menuItems = new Promise((resolve, reject) => {
        this.websiteService.getWebsiteMenuItems().subscribe(menu_items => {
          let m = [];
          menu_items.forEach(menu_item => m.push(menu_item))
          console.log(m);
          resolve(m);
        })
      });
    })
  }

}
