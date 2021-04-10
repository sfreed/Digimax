import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, DocumentData, DocumentReference } from '@angular/fire/firestore';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { FireStoreDao } from '../dao/FireStoreDao.dao';
import { Card } from '../models/card.model';
import { Page } from '../models/page.model';
import { MenuItem } from '../models/menu.model';

@Injectable({
  providedIn: 'root'
})
export class WebsiteService {

  constructor(public db: AngularFirestore, 
    private dao: FireStoreDao,
    private cookieService: CookieService) {}

  private collection: string = "agent-website";

  public cookieId: string = "web-site-id";

  private collection_admins: string = "admins";
  private collection_menu_items: string = "menu-items";
  private collection_cards: string = "cards";
  private collection_pages: string = "pages";

  public current_web_site_name: string;

  public parent_item: MenuItem = null;

  public getWebsiteByName(name: string): Observable<Website[]> {
    return this.db.collection<Website>(this.collection,  ref => ref.where('name', '==', name))
      .valueChanges({ idField: 'dbId' });
  }

  public getWebsiteById(): AngularFirestoreDocument<Website> {
    return this.db.collection<Website>(this.collection).doc(this.getWebSiteId());
  }

  public updateWebsite(value: Website) {
    return this.db.collection<Website>(this.collection).doc(value.dbId).update(value);
  }

  public getWebsiteAdmins(): Observable<DocumentData> {
    return this.db.collection(this.collection).doc(this.getWebSiteId())
      .collection(this.collection_admins).valueChanges({ idField: 'dbId' });
  }

  public createWebsiteAdmin(email: any) {
    return this.dao.createSubCollectionItem<string>(this.collection, this.getWebSiteId(), this.collection_admins, email);
  }

  public deleteWebsiteAdmin(email: any) {
    return this.dao.deleteSubCollectionItem<string>(this.collection, this.getWebSiteId(), this.collection_admins, email);
  }

  public getWebsiteMenuItems(): Observable<MenuItem[]> {
    return this.dao.getSubCollection<MenuItem>(this.collection, this.getWebSiteId(), this.collection_menu_items, 'order');
  }

  public getWebsiteMenuItemById(id: string): Observable<MenuItem> {
    return this.dao.getSubCollectionItemById<MenuItem>(this.collection, this.getWebSiteId(), this.collection_menu_items, id);
  }

  public createMenuItem(value: MenuItem): Promise<any>{
    if(value.parent_id != '0'){
        if(!this.parent_item.items){
          this.parent_item.items=[];
        }
        this.parent_item.items.push(value);

        return this.updateMenuItem(this.parent_item);
    } else {
      return this.dao.createSubCollectionItem<MenuItem>(this.collection, this.getWebSiteId(), this.collection_menu_items, value)

    }
  }

  public updateMenuItem(value: MenuItem): Promise<void>{
    return this.dao.updateSubCollectionItem<MenuItem>(this.collection, this.getWebSiteId(), this.collection_menu_items, value);
  }

  public deleteMenuItem(id: string): Promise<void>{

    console.log('deleting ' + id)
    return this.dao.deleteSubCollectionItem<MenuItem>(this.collection, this.getWebSiteId(), this.collection_menu_items, id);
  }
  
  public getWebsiteCards(): Observable<DocumentData> {
    return this.dao.getSubCollection<Card>(this.collection, this.getWebSiteId(), this.collection_cards, 'name');
  }

  public getWebsiteCardById(id: string): Observable<Card> {
    return this.dao.getSubCollectionItemById<Card>(this.collection, this.getWebSiteId(), this.collection_cards, id);
  }

  public createCard(value: Card): Promise<DocumentReference<Card>>{
    return this.dao.createSubCollectionItem<Card>(this.collection, this.getWebSiteId(), this.collection_cards, value);
  }

  public updateCard(value: Card): Promise<void>{
    return this.dao.updateSubCollectionItem<Card>(this.collection, this.getWebSiteId(), this.collection_cards, value);
  }

  public deleteCard(id: string): Promise<void>{
    return this.dao.deleteSubCollectionItem<Card>(this.collection, this.getWebSiteId(), this.collection_cards, id);
  }

  public getWebsitePages(): Observable<Page[]> {
    return this.dao.getSubCollection<Page>(this.collection, this.getWebSiteId(), this.collection_pages, 'name');
  }

  public getWebsitePagesById(id: string): Observable<Page> {
    return this.dao.getSubCollectionItemById<Page>(this.collection, this.getWebSiteId(), this.collection_pages, id);
  }

  public createPage(value: Page): Promise<DocumentReference<Page>>{
    return this.dao.createSubCollectionItem<Page>(this.collection, this.getWebSiteId(), this.collection_pages, value);
  }

  public updatePage(value: Page): Promise<void>{
    return this.dao.updateSubCollectionItem<Page>(this.collection, this.getWebSiteId(), this.collection_pages, value);
  }

  public deletePage(id: string): Promise<void>{
    return this.dao.deleteSubCollectionItem<Page>(this.collection, this.getWebSiteId(), this.collection_pages, id);
  }

  private getWebSiteId(): string {
    return this.cookieService.get(this.cookieId);
  }

}

export class Website {
  dbId: string;
  name: string;
  agent: Agent = {...new Agent()};
}

export class Agent {
  fname: string;
  lname: string;
  title: string;
  phone: string;
  email: string;
  address: string;
}

