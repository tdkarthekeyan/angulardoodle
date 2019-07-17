import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './services/api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public Api: ApiService, private router: Router) { }

  title = 'Doodleblue Sample Framework';

  isLoggedIn(): boolean {
    return this.Api.isLoggedIn;
  }
  getName(): string {
    let name = "Login";
    if (this.Api.isLoggedIn) {
      name = this.Api.getUserName();
    }
    return name;
  }
  logout(): void {
    this.Api.logout();
    this.router.navigateByUrl('/login');
  }
  onTitleClick(): void {
    if (this.Api.isLoggedIn) {
      this.router.navigateByUrl('/main-screen');
    }
  }

  onIdentityClick(): void {
    if (this.Api.isLoggedIn) {
      this.router.navigateByUrl('/main-screen');
    } else {
      this.router.navigateByUrl('/login');
    }
  }
}
