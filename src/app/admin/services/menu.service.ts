import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FireStoreDao } from '../../../ag_common/dao/FireStoreDao.dao';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { MenuItem } from 'src/app/layouts/shared/sidebar/menu.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  constructor(public fsDao: FireStoreDao<MenuItem>) {}

  private collection: string = "menu-items";

  public getMenuItemById(id: any): AngularFirestoreDocument<MenuItem> {
    return this.fsDao.getById(this.collection, id);
  }

  public getAllMenuItemsSetIdField(id_field: string): Observable<MenuItem[]> {
    return this.fsDao.getAllSetIdField(this.collection, id_field);
  }

  public getAllMenuItemsOrderBySetIdField(order: string, id_field: string): Observable<MenuItem[]> {
    return this.fsDao.getAllOrderBySetIdField(this.collection, order, id_field);
  }

  public updateMenuItem(menuItem: MenuItem){
    if(menuItem.dbId){
      return this.fsDao.update(menuItem, menuItem.dbId, this.collection);
    } else {
      return this.fsDao.create(menuItem, this.collection).then(i => i.get());
    }
  }

  public delete(id: string){
    return this.fsDao.delete(id, this.collection);
  }
}
