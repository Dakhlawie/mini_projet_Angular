import { Component, OnInit } from '@angular/core';
import { Ouvrier } from '../model/ouvrier.model';
import { Chantier } from '../model/Chantier.model';
import { OuvrierService } from '../ouvrier.service';

@Component({
  selector: 'app-recherche-par-chantier',
  templateUrl: './recherche-par-chantier.component.html',
  styleUrls: ['./recherche-par-chantier.component.css']
})
export class RechercheParChantierComponent implements OnInit {
  ouvriers! : Ouvrier[];
IdChantier! : number;
chantiers! : Chantier[];
constructor(private ouvrierService: OuvrierService ) {

}
  ngOnInit(): void {
    this.ouvrierService.listeChantier().subscribe(cats => {this.chantiers = cats;
    console.log(cats);
    });
    this.ouvriers = [];
    }
    onChange() {
      this.ouvrierService.rechercherParChantier(this.IdChantier).
    subscribe((prods:any) => {
      this.ouvriers = prods;
      });
      
      }
      
}
