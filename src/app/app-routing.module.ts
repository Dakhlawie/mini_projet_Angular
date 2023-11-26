import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OuvriersComponent } from './ouvriers/ouvriers.component';
import { AddOuvrierComponent } from './add-ouvrier/add-ouvrier.component';
import { UpdateOuvrierComponent } from './update-ouvrier/update-ouvrier.component';
import { RechercheParChantierComponent } from './recherche-par-chantier/recherche-par-chantier.component';
import { ListeChantiersComponent } from './liste-chantiers/liste-chantiers.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { OuvrierGuard } from './ouvrier.guard';
import { ListeuserComponent } from './listeuser/listeuser.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { ListeRoleComponent } from './liste-role/liste-role.component';
import { AddRoleComponent } from './add-role/add-role.component';
import { UpdateroleComponent } from './updaterole/updaterole.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { VerificationComponent } from './verification/verification.component';


const routes: Routes = [
  {path: 'ouvriers', component:OuvriersComponent},
  {path:'add-ouvrier',component:AddOuvrierComponent},
  { path: "", redirectTo: "ouvriers", pathMatch: "full" },
  {path: "updateOuvrier/:id", component: UpdateOuvrierComponent},
  {path:"rechercheParChantier",component:RechercheParChantierComponent},
  {path:"listeChantiers",component:ListeChantiersComponent},
  {path:"rechercheParNom",component:RechercheParNomComponent},
  {path:"login",component:LoginComponent},
  {path:"app-forbidden",component:ForbiddenComponent},
  {path:"liste_user",component:ListeuserComponent},
  {path:"add-user",component:AddUserComponent},
  {path:"updateuser/:id",component:UpdateUserComponent},
  {path:"liste-role",component:ListeRoleComponent},
  {path:"add-role",component:AddRoleComponent},
  {path:"updaterole/:id",component:UpdateroleComponent},
  {path:"inscription",component:InscriptionComponent},
  {path:"verification",component:VerificationComponent}
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

    
 }
