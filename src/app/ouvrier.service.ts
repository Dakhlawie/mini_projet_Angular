import { Injectable } from '@angular/core';
import { Ouvrier } from './model/ouvrier.model';
import { Chantier } from './model/Chantier.model';
import { Observable } from 'rxjs';
import{Image} from "./model/Image.model";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
const httpOptions = {headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};
@Injectable({
  providedIn: 'root'
})
export class OuvrierService {
  apiURL: string = 'http://localhost:8092/ouvriers/api';
  apiURLCat: string = 'http://localhost:8092/ouvriers/cat';

  chantiers!:Chantier[];

  
  constructor(private http : HttpClient,private authService:AuthService) { 
   
  }
listeOuvrier(): Observable<Ouvrier[]>{
     
      return this.http.get<Ouvrier[]>(this.apiURL+"/all");
      
    }
ajouterOuvrier( prod: Ouvrier):Observable<Ouvrier>{
      
return this.http.post<Ouvrier>(this.apiURL+"/addouv", prod);

      }
supprimerOuvrier( id:number){
      const url = `${this.apiURL}/delouv/${id}`;
      
      return this.http.delete(url);
      
    }
consulterOuvrier(id: number): Observable<Ouvrier> {
      const url = `${this.apiURL}/getbyid/${id}`;
    
      
      return this.http.get<Ouvrier>(url);
      
}
      

  
  

updateOuvrier(prod :Ouvrier) : Observable<Ouvrier>
      {
           
            return this.http.put<Ouvrier>(this.apiURL+"/updateouv", prod);
      }
      listeChantier(): Observable<Chantier[]> {
           
            return this.http.get<Chantier[]>(this.apiURL+"/ch");
          }
consulterChantier(id:number): Chantier{ 
    return this.chantiers.find(cat => cat.idChantier == id)!;
    }
rechercherParChantier(idCat: number):Observable< Chantier[]> {
      const url = `${this.apiURL}/ouvriesch/${idCat}`;
      return this.http.get<Chantier[]>(url);
      }
ajouterChantier( cat: Chantier):Observable<Chantier>{
        return this.http.post<Chantier>(this.apiURLCat, cat, httpOptions);
}
        
rechercherParNom(nom: string):Observable< Ouvrier[]> {
      const url = `${this.apiURL}/ouvrsByName/${nom}`;
      return this.http.get<Ouvrier[]>(url);
}
uploadImage(file: File, filename: string): Observable<Image>{
      const imageFormData = new FormData();
      imageFormData.append('image', file, filename);
      const url = `${this.apiURL + '/image/upload'}`;
      return this.http.post<Image>(url, imageFormData);
}
loadImage(id: number): Observable<Image> {
      const url = `${this.apiURL + '/image/get/info'}/${id}`;
      return this.http.get<Image>(url);
}
uploadImageProd(file: File, filename: string, idOuv:number): Observable<any>{
      const imageFormData = new FormData();
      imageFormData.append('image', file, filename);
      const url = `${this.apiURL + '/image/uplaodImageouv'}/${idOuv}`;
      return this.http.post(url, imageFormData);
      }
supprimerImage(id : number) {
            const url = `${this.apiURL}/image/delete/${id}`;
            return this.http.delete(url, httpOptions);
}
uploadImageFS(file: File, filename: string, idProd : number): Observable<any>{
      const imageFormData = new FormData();
      imageFormData.append('image', file, filename);
      const url = `${this.apiURL + '/image/uploadFS'}/${idProd}`;
      return this.http.post(url, imageFormData);
}
      
                

      
}
