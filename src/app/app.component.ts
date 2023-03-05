import { Component, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { environment } from '../environments/environment';

@Component({
  selector: 'ka-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    const app = initializeApp(environment.firebaseConfig);
    const auth = getAuth(app);
    console.log(auth.currentUser);
  }
}
