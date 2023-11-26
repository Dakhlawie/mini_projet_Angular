import { Component, OnInit } from '@angular/core';
import { Chantier } from '../model/Chantier.model';
import { OuvrierService } from '../ouvrier.service';

@Component({
  selector: 'app-liste-chantiers',
  templateUrl: './liste-chantiers.component.html',
  styleUrls: ['./liste-chantiers.component.css']
})
export class ListeChantiersComponent implements OnInit{
  constructor(private ouvrierService: OuvrierService ) {

  }
  ajout:boolean=true;

updatedChantier:Chantier= {"idChantier":0,"nomChantier":""};
  chantiers:Chantier[];
  ngOnInit(): void {
    this.chargerChantiers();
  }


chargerChantiers(){
  this.ouvrierService.listeChantier().subscribe(prods => {
  
  this.chantiers = prods;
  }); 
  }
chantierUpdated(cat:Chantier){
    console.log("Cat updated event",cat);
    this.ouvrierService.ajouterChantier(cat).
     subscribe( ()=> this.chargerChantiers());
}
updateChantier(cat:Chantier) {
  this.updatedChantier=cat;
  this.ajout=false; 
  }
  
    
}
