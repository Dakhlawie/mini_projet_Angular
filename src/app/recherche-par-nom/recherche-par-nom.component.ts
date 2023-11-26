import { Component, OnInit } from '@angular/core';
import { OuvrierService } from '../ouvrier.service';
import { Ouvrier } from '../model/ouvrier.model';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrls: ['./recherche-par-nom.component.css']
})
export class RechercheParNomComponent implements OnInit{
  constructor(private ouvrierService: OuvrierService ) {

  }
  ngOnInit(): void {
    this.ouvrierService.listeOuvrier().subscribe(prods => {
      console.log(prods);
      this.ouvriers = prods;
      });
  }
  allOuvriers! : Ouvrier[];
searchTerm!: string;

  nom!:string
  ouvriers!:Ouvrier[]
  rechercherOuvrs(){
    this.ouvrierService.rechercherParNom(this.nom).subscribe(prods => {
    this.ouvriers = prods; 
    console.log(prods)});
    }
onKeyUp(filterText : string){
      this.ouvriers = this.allOuvriers.filter(item =>
      item.nom.toLowerCase().includes(filterText));
      }
      
    
}
