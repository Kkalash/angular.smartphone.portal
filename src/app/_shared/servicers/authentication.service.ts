import { Injectable, NgZone } from '@angular/core';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { User } from '../interfaces/user.interface';
import { AppRoute } from '../enums/app-route.enum';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private readonly user = 'user';
  userData: any; // Save logged in user data

  constructor(
    public afs: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone, // NgZone service to remove outside scope warning
  ) {
    /* Saving user data in localstorage when
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem(this.user, JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem(this.user));
      } else {
        localStorage.setItem(this.user, 'null');
        JSON.parse(localStorage.getItem(this.user));
      }
    });
  }

  // Sign in with email/password
  public async signIn(email: string, password: string): Promise<void> {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(
        email,
        password,
      );
      this.ngZone.run(() => {
        this.router.navigate([AppRoute.SmartphoneList]);
      });
      this.setUserData(result.user);
    } catch (error) {
      window.alert(error.message);
    }
  }

  // Sign up with email/password
  public async signUp(email: string, password: string): Promise<void> {
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(
        email,
        password,
      );
      /* Call the SendVerificaitonMail() function when new user sign
      up and returns promise */
      this.sendVerificationMail();
      this.setUserData(result.user);
    } catch (error) {
      window.alert(error.message);
    }
  }
  // Send email verfificaiton when new user sign up
  public async sendVerificationMail(): Promise<void> {
    return this.afAuth.currentUser
      .then((u: any) => u.sendEmailVerification())
      .then(() => {
        this.router.navigate([`/${AppRoute.Auth}/${AppRoute.VerfiyEmail}`]);
      });
  }

  // Reset Forggot password
  public async forgotPassword(passwordResetEmail: string): Promise<void> {
    return this.afAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  // Returns true when user is looged in and email is verified
  public get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem(this.user));
    return user !== null && user.emailVerified !== false ? true : false;
  }

  // Sign in with Google
  public async googleAuth(): Promise<void> {
    return this.authLogin(new auth.GoogleAuthProvider());
  }

  // Sign in with Google
  public async facebookAuth(): Promise<void> {
    return this.authLogin(new auth.FacebookAuthProvider());
  }

  // Auth logic to run auth providers
  public async authLogin(provider: any): Promise<void> {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['dashboard']);
        });
        this.setUserData(result.user);
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  /* Setting up user data when sign in with username/password,
  sign up with username/password and sign in with social auth
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  public setUserData(user: any): Promise<void> {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`,
    );
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };
    return userRef.set(userData, {
      merge: true,
    });
  }

  // Sign out
  public async signOut(): Promise<void> {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem(this.user);
    });
  }
}
