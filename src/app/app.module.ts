import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OuvriersComponent } from './ouvriers/ouvriers.component';
import { AddOuvrierComponent } from './add-ouvrier/add-ouvrier.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { UpdateOuvrierComponent } from './update-ouvrier/update-ouvrier.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { RechercheParChantierComponent } from './recherche-par-chantier/recherche-par-chantier.component';
import { ListeChantiersComponent } from './liste-chantiers/liste-chantiers.component';
import { UpdateChantierComponent } from './update-chantier/update-chantier.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { TokenInterceptor } from './token.interceptor';
import { ListeuserComponent } from './listeuser/listeuser.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { ListeRoleComponent } from './liste-role/liste-role.component';
import { AddRoleComponent } from './add-role/add-role.component';
import { UpdateroleComponent } from './updaterole/updaterole.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { VerificationComponent } from './verification/verification.component';




@NgModule({
  declarations: [
    AppComponent,
    OuvriersComponent,
    AddOuvrierComponent,
    UpdateOuvrierComponent,
    RechercheParChantierComponent,
    ListeChantiersComponent,
    UpdateChantierComponent,
    RechercheParNomComponent,
    SearchFilterPipe,
    LoginComponent,
    ForbiddenComponent,
    ListeuserComponent,
    AddUserComponent,
    UpdateUserComponent,
    ListeRoleComponent,
    AddRoleComponent,
    UpdateroleComponent,
    InscriptionComponent,
    VerificationComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
   
   
    
  ],
  providers: [{ provide : HTTP_INTERCEPTORS,
    useClass : TokenInterceptor,
    multi : true}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
