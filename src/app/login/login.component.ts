import { Component, OnInit } from '@angular/core';
import { AuthService, GoogleLoginProvider, SocialUser, FacebookLoginProvider } from 'angular4-social-login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user: SocialUser;
  private loggedIn: boolean;
  hide = true;
  constructor(private authService: AuthService,private router: Router) { }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }

  afterLogin(user){
    if(user!== null){
      this.router.navigate(['/view-records']);
    }
    
  }
  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      this.afterLogin(user);
    });
  }



}
