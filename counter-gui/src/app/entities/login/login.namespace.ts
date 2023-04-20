export namespace Login {
  export enum LoginFields {
    login = 'login',
    password = 'password',
  }

  export interface LoginForm {
    [LoginFields.login]: string;
    [LoginFields.password]: string;
  }
}
