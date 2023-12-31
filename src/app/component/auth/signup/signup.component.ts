import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { IUser } from '../../interface/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private fb: FormBuilder, private auth: AuthService) { }

  formSignup = this.fb.group({
    username: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    confirmPassword: ['']
  }, { validator: this.checkPassword })

  checkPassword(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value

    if (password !== confirmPassword) {
      group.get('confirmPassword')?.setErrors({ misMatch: true });
    } else {
      group.get('confirmPassword')?.setErrors(null);
    }
  }

  onHandleSubmit() {
    const user: IUser = {
      username: this.formSignup.value.username || '',
      email: this.formSignup.value.email || '',
      password: this.formSignup.value.password || '',
      confirmPassword: this.formSignup.value.confirmPassword || '',
    };
    if (this.formSignup.valid) {
      this.auth.signup(user).subscribe(data => {
        console.log(data);

      })
    }

  }
}
