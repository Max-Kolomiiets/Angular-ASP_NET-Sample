import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private alertifyService: AlertifyService, private router: Router) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  private createLoginForm() {
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', Validators.required]
    })
  }

  get userName() {
    return this.loginForm.get('userName') as FormControl;
  }
  get password() {
    return this.loginForm.get('password') as FormControl;
  }

  onLogin() {
    console.log(this.loginForm.value);
    const user = this.authService.authUser(this.loginForm.value)
    console.log(user);
    if (user) {
      localStorage.setItem('token', `${user.userName}/${user.password}`);
      this.alertifyService.success("You successfuly logged in!");
      this.router.navigate(['']);
    } else {
      this.alertifyService.error("Error! Your data is invalid! TRY AGAIN!")
    }
  }
}
