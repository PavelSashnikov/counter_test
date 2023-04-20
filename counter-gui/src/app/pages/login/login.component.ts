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

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.loginForm = new FormGroup({
      [Login.LoginFields.login]: new FormControl('', [Validators.required]),
      [Login.LoginFields.password]: new FormControl('', [Validators.required]),
    });
  }
}
