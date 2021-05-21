import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {NzFormTooltipIcon} from 'ng-zorro-antd/form';
import {UserService} from '../../../services/user.service';
import {User} from '../../../interfaces/user.interface';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {
  validateForm!: FormGroup;
  errorMsg = '';
  loading = false;

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if (this.validateForm.valid) {
      this.errorMsg = '';
      this.loading = true;
      this.userService.register(this.validateForm.value).subscribe({
        next: () => {
          this.loading = false;
          this.router.navigate(['/', 'user', 'login']);
        },
        error: msg => {
          this.errorMsg = msg.error;
          this.loading = false;
        }
      });
    }
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  }

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      nickname: [null],
      email: [null],
      checkPassword: [null, [Validators.required, this.confirmationValidator]]
    });
  }
}
