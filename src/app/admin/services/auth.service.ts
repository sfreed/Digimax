import { Injectable, NgZone } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';
import { FireAuthDao } from '../dao/FireAuthDao.dao';
import { User } from '../models/user.models';
import { FireStoreUserDao } from '../dao/FireStoreUserDao.dao';

@Injectable({
  providedIn: 'root'
})
export class AuthService
{
  constructor(public fsDao: FireStoreUserDao,
    public router: Router,
    public ngZone: NgZone,
    public toster: ToastrService,
    private authDao: FireAuthDao,
    private cookieService: CookieService) {}

  public showLoader = false;
  public user: User;

  site: string;
  public signInWithEmailAndPassword(email: string, password: string, site: string){
    this.site = site;
    return this.handleLogin(this.authDao.signIn(email, password));
  }

  public isLoggedIn(): boolean {
    if(this.cookieService.check('user')){
      const user = JSON.parse(this.cookieService.get('user'));
      return (user != null && user.emailVerified !== false) ? true : false;
    }

    return false;
  }

  public resetPassword(passwordResetEmail: string){
    return this.authDao.forgotPassword(passwordResetEmail)
      .then(() => {
        this.toster.info('Password reset email sent, check your inbox.');
      }).catch((error) => {
        this.toster.error(error);
      });
  }

  public resendVerificationEmail(user: User) {
    this.authDao.resendVerificationEmail(user);
  }

  public logOut(){
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };

    return this.authDao.signOut().then(() => {
      this.showLoader = false;
      this.cookieService.delete('user');
      this.router.navigate(['/auth/login']);
    });
  }

  public getAuthUserData(): User{
    return JSON.parse(this.cookieService.get('user'));
  }

  private handleLogin(login: Promise<any>){
    this.showLoader = true;

    login.then(result => {
      this.fsDao.getById("users", result.user.email).get().subscribe (ref => {
        if(!ref.exists){
          this.toster.error('An account was not found for ' + result.user.email +
          ". If you believe this is the results of an error, please contact your Portal Administrator!");
          return;
        }

        this.logUserIntoPortal(result, ref);
      });
    }).catch((error) => {
      this.toster.error('You have enter Wrong Email or Password.', error);
    })
    .finally(() => this.showLoader = false);
  }

  private logUserIntoPortal(authResult, userRef){
    this.user = userRef.data();

    //if(user has been verified, but not set in db)
    if(authResult.user.emailVerified && !this.user.emailVerified){
      this.user.emailVerified = true;
      this.fsDao.update(this.user, this.user.email, "users");
    }

    if(authResult.user.photoURL && !this.user.photoURL){
      this.user.photoURL = authResult.user.photoURL;
      this.fsDao.update(this.user, this.user.email, "users");
    }

    this.cookieService.set('user', JSON.stringify(this.user), .5);

    let navigationExtras: NavigationExtras = {
      queryParams: { 'site': this.site },
    };

    this.ngZone.run(() => {
      this.router.navigate(['admin'], navigationExtras);
    });

    this.showLoader = false;    
  }

  public getLoadingStatus(){
    return this.showLoader;
  }
}
