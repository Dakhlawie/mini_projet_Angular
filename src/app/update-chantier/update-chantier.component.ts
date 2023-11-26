import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Chantier } from '../model/Chantier.model';
import { ActivatedRoute, Router } from '@angular/router';
import { OuvrierService } from '../ouvrier.service';

@Component({
  selector: 'app-update-chantier',
  templateUrl: './update-chantier.component.html',
  styleUrls: ['./update-chantier.component.css']
})
export class UpdateChantierComponent implements OnInit{
  constructor(private activatedRoute: ActivatedRoute,
    private ouvrierService: OuvrierService,private router :Router) { }
chantiers:Chantier[]
  @Input()
  chantier! : Chantier;
  @Output() 
chantierUpdated = new EventEmitter<Chantier>();
@Input()
ajout!:boolean;

 
ngOnInit(): void {
    console.log("ngOnInit du composant UpdateChantiers ",this.chantier);
}
saveChantier(){
      this.chantierUpdated.emit(this.chantier);
}
chargerChantiers(){
  this.ouvrierService.listeChantier().subscribe(prods => {
  
    this.chantiers = prods;
    }); 
  }
  
      
}
