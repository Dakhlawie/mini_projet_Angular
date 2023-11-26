import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  
  newUser = new User();
  addUserForm: FormGroup;
  errorMessage: string = '';
 
  verificationCode: string = '';
  showModal: boolean = false; // Initialize an error message variable


  constructor(private service: UserService,private  router: Router, private fb: FormBuilder) {
    let formControls = {
      username: new FormControl('', [
        Validators.required,
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl('', [
        Validators.required,
      ]),
      confirmPassword:new FormControl('',[
           Validators.required,
      ]),
    };
    this.addUserForm = this.fb.group(formControls);
  }
  get username(){
    return this.addUserForm.get('username')
  }
  get email() {
    return this.addUserForm.get('email');
  }
  get password() {
    return this.addUserForm.get('password');
  }
  get confirmPassword(){
    return this.addUserForm.get('confirmPassword');
  }
  ngOnInit(): void {
    // Your initialization code here
  }

  /*addNewUser() {
    let data = this.addUserForm.value;
  
    if (!data.username || !data.email || !data.password || !data.confirmPassword) {
      this.errorMessage = 'Remplir tous les champs';
    } else if (data.password !== data.confirmPassword) {
      this.errorMessage = 'Les mots de passe ne correspondent pas.';
    } else if (!this.isEmailValid(data.email)) {
      this.errorMessage = 'L\'adresse e-mail n\'est pas valide.';
    } else {
      this.errorMessage = '';
  
      /*let user = new User(data.username, data.email, data.password);
  
      console.log(user);
  
      this.service.ajouterUser(user).subscribe(
        res => {
          console.log(res);
          this.router.navigate(['login']);
        },
        err => {
          console.log(err);
          this.errorMessage = 'Une erreur s\'est produite. Veuillez réessayer.';
        }
      );
      this.router.navigate(['verification'], {
        queryParams: {
          username: data.username,
          email: data.email,
          password: data.password
        }
      });
      this.service.sendCodeByEmail(data.email).subscribe(
        () => {
          console.log('Code envoyé avec succès');
          // Vous pouvez ajouter des actions supplémentaires si nécessaire
        },
        (erreur) => {
          console.error('Erreur lors de l\'envoi du code :', erreur);
        }
      );
    }
  }*/
  addNewUser() {
    let data = this.addUserForm.value;
  
    if (!data.username || !data.email || !data.password || !data.confirmPassword) {
      this.errorMessage = 'Remplir tous les champs';
    } else if (data.password !== data.confirmPassword) {
      this.errorMessage = 'Les mots de passe ne correspondent pas.';
    } else if (!this.isEmailValid(data.email)) {
      this.errorMessage = 'L\'adresse e-mail n\'est pas valide.';
    } else {
      this.errorMessage = '';
  
      
      this.service.listeUser().subscribe(
        (users: User[]) => {
          const emailExists = users.some(user => user.email === data.email);
  
          if (emailExists) {
            this.errorMessage = 'L\'adresse e-mail existe déjà. Veuillez utiliser une autre adresse e-mail.';
          } else {
        
            this.service.sendCodeByEmail(data.email).subscribe(
              (generatedCode: string) => {
                console.log('Code généré:', generatedCode);
  
                localStorage.setItem('verificationCode', generatedCode);
  
               
                this.router.navigate(['verification'], {
                  queryParams: {
                    username: data.username,
                    email: data.email,
                    password: data.password,
                  }
                });
              },
              (error) => {
                console.error('Erreur lors de l\'envoi du code :', error);
            
              }
            );
          }
        },
        (error) => {
          console.error('Erreur lors de la récupération des utilisateurs :', error);
          
        }
      );
    }
  }
  
  isEmailValid(email: string): boolean {
    // Utilisez une expression régulière pour valider le format de l'e-mail
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailRegex.test(email);
  } 

}

  
