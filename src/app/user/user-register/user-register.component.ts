import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { matchValidator } from '../custom-form-validator';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
})
export class UserRegisterComponent implements OnInit {
  registerationForm!: FormGroup;
  user!: User;

  constructor(private fb: FormBuilder, private userService: UserService, private alertifyService: AlertifyService) {}

  ngOnInit(): void {
    this.registerationForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(3)]],
      email: [null, [Validators.required, Validators.email]],
      password: [
        null,
        [
          Validators.required,
          Validators.minLength(8),
          matchValidator('confirmPassword', true),
        ],
      ],
      confirmPassword: [
        null,
        [Validators.required, matchValidator('password')],
      ],
      mobile: ['', [Validators.required, Validators.minLength(10)]],
    });

  }

  onSubmit() {
    if (this.registerationForm.valid) {
      //this.user = Object.assign(this.user, this.registerationForm.value);
      this.userService.addUser(this.userData());
      this.registerationForm.reset();
      this.alertifyService.success("Well done!");
    } else
      this.alertifyService.error("Error");
  }

  userData(): User {
    return this.user = {
      userName: this.userrName.value,
      email: this.email.value,
      password: this.password.value,
      mobile: this.mobile.value,
    }
  }

  get userrName() {
    return this.registerationForm.get('userName') as FormControl;
  }
  get email() {
    return this.registerationForm.get('email') as FormControl;
  }
  get password() {
    return this.registerationForm.get('password') as FormControl;
  }
  get confirmPassword() {
    return this.registerationForm.get('confirmPassword') as FormControl;
  }
  get mobile() {
    return this.registerationForm.get('mobile') as FormControl;
  }
}
