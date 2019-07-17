import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: login;
  emailId: string;
  password: string;
  constructor(private router: Router,
    public Api: ApiService) {
    this.login = new login();
  }

  ngOnInit() {
  }
  Login() {
    this.login.userId = this.emailId;
    this.login.password = this.password;
    this.Api.
      Login<login>(this.login)
      .subscribe((res: any) => {
        console.log(res.data);
        if (res.data !== 'Invalid Account') {
          this.Api.isLoggedIn = true;
          this.Api.setUserName(res.data[0].name);
          this.Api.setEmailId(res.data[0].emailId);
          this.Api.setUserId(res.data[0].user_id);
          this.router.navigateByUrl('/main-screen');
        }
      },
        errorResponse => {
          this.Api.logout();
          alert(errorResponse.error.error);
        });
  }

}
class login {
  userId: string;
  password: string;
}