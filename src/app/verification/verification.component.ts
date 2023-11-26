import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../model/user.model';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit{
  verificationCode: string;
  username: string;
  email: string;
  password: string;
  constructor(private route: ActivatedRoute, private userService: UserService,private router: Router) { }
  ngOnInit() {
    // Récupérer les informations de l'utilisateur depuis l'URL
    this.route.queryParams.subscribe(params => {
      this.username = params['username'];
      this.email = params['email'];
      this.password = params['password'];
      this.verificationCode = localStorage.getItem('verificationCode');

    });

  console.log('Verification Code:', this.verificationCode);
    
  }
 verifyCode() {
  
    const enteredCode = (document.getElementById('verificationCode') as HTMLInputElement).value;
  


    
    if (enteredCode === this.verificationCode) {
      
      const user = new User(this.username, this.email, this.password);

      
      this.userService.ajouterUser(user).subscribe(
        (res: User) => {
          console.log('User added successfully:', res);
          this.router.navigate(['/login']);
        },
        (error) => {
          console.error('Error adding user:', error);
          
        }
      );
    } else {
      alert('Code incorrect. Veuillez réessayer.');
    }
  }
 /* verifyCode() {
    const enteredCode = (document.getElementById('verificationCode') as HTMLInputElement).value;
  
   
    const user = new User(this.email, enteredCode);
  
    this.userService.verifyUser(user).subscribe(
      (response) => {
        console.log('Verification response:', response);
    
        if (response === 'compte verifiée') {
          console.log('Compte utilisateur vérifié avec succès');
          this.router.navigate(['/login']);
        } else {
          alert('Code incorrect. Veuillez réessayer.');
        }
      },
      (error) => {
        console.error('Erreur lors de la vérification du code:', error);
        alert('Erreur lors de la vérification du code. Veuillez réessayer.');
      }
    );
    
    
    
    
  }*/
  

}
