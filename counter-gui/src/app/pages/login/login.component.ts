import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Login } from 'src/app/entities/login/login.namespace';
import { AuthService } from 'src/app/shared/services/auth.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  constructor(private readonly authService: AuthService, private readonly cd: ChangeDetectorRef) {}
  loginForm: FormGroup;
  formFields = Login.LoginFields;

  hideHint: boolean = true;
  err: string;

  ngOnInit(): void {
    this.createForm();
  }

  onSubmit(): void {
    this.err = '';
    if (this.loginForm.invalid) {
      this.hideHint = false;
      return;
    }
    this.authService
      .login(this.loginForm.value)
      .pipe(take(1))
      .subscribe(
        (t) => {
          console.log(t);
        },
        (e) => {
          this.err = e.message;
          this.cd.detectChanges();
        }
      );
    this.hideHint = true;
  }

  private createForm(): void {
    this.loginForm = new FormGroup({
      [Login.LoginFields.login]: new FormControl('', [Validators.required]),
      [Login.LoginFields.password]: new FormControl('', [Validators.required]),
    });
  }
}
