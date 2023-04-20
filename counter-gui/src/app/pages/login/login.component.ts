import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Login } from 'src/app/entities/login/login.namespace';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  formFields = Login.LoginFields;

  hideHint: boolean = true;

  ngOnInit(): void {
    this.createForm();
  }

  onSubmit(): void {
    if(this.loginForm.invalid) {
      this.hideHint = false;
      return
    }
    this.hideHint = true;
  }

  private createForm(): void {
    this.loginForm = new FormGroup({
      [Login.LoginFields.login]: new FormControl('', [Validators.required]),
      [Login.LoginFields.password]: new FormControl('', [Validators.required]),
    });
  }
}
