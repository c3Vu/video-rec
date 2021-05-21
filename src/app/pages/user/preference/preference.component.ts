import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../services/user.service';
import {Preference} from '../../../interfaces/user.interface';

@Component({
  selector: 'app-preference',
  templateUrl: './preference.component.html',
  styleUrls: ['./preference.component.less']
})
export class PreferenceComponent implements OnInit {
  validateForm!: FormGroup;
  submitForm(): void {
    this.userService.updatePreference(this.validateForm.value as Preference);
  }

  constructor(
    private fb: FormBuilder,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      genre: [1],
      actor: [2],
      director: [3]
    });
  }

}
