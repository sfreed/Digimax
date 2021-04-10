import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class FireStoreDao {
  constructor(public db: AngularFirestore) { }

  getSubCollection<T>(p_collection: string, current_web_site_id: string, s_collection: string, orderBy: string): Observable<T[]>{
    return this.db.collection(p_collection).doc(current_web_site_id)
      .collection<T>(s_collection, ref => ref.orderBy(orderBy)).valueChanges({ idField: 'dbId' });
  }

  getSubCollectionItemById<T>(p_collection: string, current_web_site_id: string, s_collection: string, id: string): Observable<T>{
    return this.db.collection(p_collection).doc(current_web_site_id)
      .collection<T>(s_collection).doc(id).valueChanges({ idField: 'dbId' });
  }

  createSubCollectionItem<T>(p_collection: string, current_web_site_id: string, s_collection: string, value: T): Promise<DocumentReference<T>>{
    return this.db.collection(p_collection).doc(current_web_site_id)
      .collection<T>(s_collection).add({...value});
  }

  updateSubCollectionItem<T>(p_collection: string, current_web_site_id: string, s_collection: string, value: any): Promise<void>{
    return this.db.collection(p_collection).doc(current_web_site_id)
      .collection<T>(s_collection).doc(value.dbId).update(value);
  }

  deleteSubCollectionItem<T>(p_collection: string, current_web_site_id: string, s_collection: string, value: string): Promise<void>{
    return this.db.collection(p_collection).doc(current_web_site_id)
      .collection<T>(s_collection).doc(value).delete();
  }

}