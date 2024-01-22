import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private toastr: ToastrService) {}

  login() {
    if (this.email && this.password) {
      this.authService.login(this.email, this.password).subscribe(
        response => {
          console.log('Login Response:', response); // Log the response
          this.toastr.success('Login successful', 'Success');
          // Additional actions on successful login
        },
        error => {
          console.error('Login Failed', error);
          this.toastr.error('Login Failed :(', 'Error');
        }
      );
    } else {
      this.toastr.error('Please fill in all fields correctly.', 'Error');
    }
  }
}
