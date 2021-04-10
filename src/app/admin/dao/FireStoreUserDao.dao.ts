import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { User } from '../models/user.models';

@Injectable({
  providedIn: 'root'
})
export class FireStoreUserDao {
  constructor(public db: AngularFirestore) { }

  public getById(collection: string, value: string): AngularFirestoreDocument<User> {
    return this.db.collection(collection).doc(value);
  }

  public update(value: User, id: string, collection: string): Promise<void> {
    return this.db.collection(collection).doc(id).set(value);
  }
}
