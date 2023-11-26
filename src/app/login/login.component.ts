import { Component } from '@angular/core';
import { User } from '../model/user.model';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService : AuthService,
    private router: Router ) {

  }
  err:number = 0;

  erreur=0;
  user = new User();
 /* onLoggedin()
{
  console.log(this.user);
  let isValidUser: Boolean = this.authService.SignIn(this.user);
 if (isValidUser)
 this.router.navigate(['/']);
 else
 this.erreur=1;
 
}*/
onLoggedin()
{
  this.authService.login(this.user).subscribe({
    next: (data) => {
    let jwToken = data.headers.get('Authorization')!;
    this.authService.saveToken(jwToken);
    this.router.navigate(['/']); 
    },
    error: (err: any) => {
    this.err = 1; 
    }
    });
}

}
