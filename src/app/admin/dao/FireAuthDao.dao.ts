import { Injectable, NgZone } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../models/user.models';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class FireAuthDao {
  public user: User;

  constructor(public afAuth: AngularFireAuth,
    public toster: ToastrService,
    public router: Router,
    public ngZone: NgZone,) {}

  public signIn(email, password) {
    return this.afAuth.setPersistence("session").then(() => {
        return this.afAuth.signInWithEmailAndPassword(email, password);
    });
  }

  public signOut() {
    return this.afAuth.signOut();
  }

  public resendVerificationEmail(user: User) {

  }

  public forgotPassword(passwordResetEmail) {
    return this.afAuth.sendPasswordResetEmail(passwordResetEmail);
  }
}
