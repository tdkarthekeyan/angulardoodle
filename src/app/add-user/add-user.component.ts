import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../model/User';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  public userForm: FormGroup;

  constructor(private router: Router, public Api: ApiService) { }

  ngOnInit() {
    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      PhoneNo: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.pattern('^(0|[1-9][0-9]*)$')]),
      emailId: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
      password: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      dob: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required, Validators.maxLength(15)])
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.userForm.controls[controlName].hasError(errorName);
  }

  public addUser = (userFormValue) => {
    if (this.userForm.valid) {
      let user: any = {
        name: userFormValue.name,
        PhoneNo: userFormValue.PhoneNo,
        emailId: userFormValue.emailId,
        Password: userFormValue.password,
        gender: userFormValue.gender,
        dob: userFormValue.dob,
      };

      this.Api.addUser(user)
        .subscribe(
          response => {
            console.log(response.data);
            this.router.navigateByUrl('/login');
          },
          errorResponse => {
            console.log(errorResponse.error.error);
          });
    }
  }

  onCancel(): void {
    this.router.navigateByUrl('/login');
  }
}

