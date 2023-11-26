import { Component, OnInit } from '@angular/core';
import { Ouvrier } from '../model/ouvrier.model';
import { Image } from '../model/Image.model';
import { OuvrierService } from '../ouvrier.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Chantier } from '../model/Chantier.model';

@Component({
  selector: 'app-update-ouvrier',
  templateUrl: './update-ouvrier.component.html',
  styleUrls: ['./update-ouvrier.component.css']
})
export class UpdateOuvrierComponent implements OnInit{
  myImage! : string;
  uploadedImage!: File;
  isImageUpdated: Boolean=false;
  
updatedChId! : number;
chantiers: Chantier[];
currentOuvrier = new Ouvrier();
constructor(private activatedRoute: ActivatedRoute,
private ouvrierService: OuvrierService,private router :Router) { }
ngOnInit() : void{
 /* this.ouvrierService.listeChantier().
subscribe(cats => {this.chantiers = cats;
console.log(cats);
});
this.ouvrierService.consulterOuvrier(this.activatedRoute.snapshot.params['id']).
subscribe( prod =>{ this.currentOuvrier = prod; 
this.updatedChId = 
this.currentOuvrier.chantier.idChantier;
} ) ;
this.ouvrierService.consulterOuvrier(this.activatedRoute.snapshot.params['id']).
subscribe( prod =>{ this.currentOuvrier = prod;
this.updatedChId = prod.chantier.idChantier;
this.ouvrierService
.loadImage(this.currentOuvrier.image.idImage)
.subscribe((img: Image) => {
this.myImage = 'data:' + img.type + ';base64,' + img.image;
}); 
} ) ;*/
this.ouvrierService.listeChantier().
subscribe(cats => {this.chantiers = cats;
console.log(cats);
});
this.ouvrierService.consulterOuvrier(this.activatedRoute.snapshot.params['id'])
.subscribe( prod =>{ this.currentOuvrier = prod;
this.updatedChId = prod.chantier.idChantier;
} ) ;


}
onAddImageOuvrier() {
  this.ouvrierService
  .uploadImageProd(this.uploadedImage, 
  this.uploadedImage.name,this.currentOuvrier.idOuvrier)
  .subscribe( (img : Image) => {
  this.currentOuvrier.images.push(img);
  });
  }
onImageUpload(event: any) {
  if(event.target.files && event.target.files.length) {
  this.uploadedImage = event.target.files[0];
  this.isImageUpdated =true;
  const reader = new FileReader();
  reader.readAsDataURL(this.uploadedImage);
  reader.onload = () => { this.myImage = reader.result as string; };
  }
  }
updateOuvrier()
{ 
  this.currentOuvrier.chantier = this.chantiers.find(cat => cat.idChantier == this.updatedChId)!;
this.ouvrierService.updateOuvrier(this.currentOuvrier).subscribe(prod => {
this.router.navigate(['ouvriers']); }
);
  
}
/*onImageUpload(event: any) {
  if(event.target.files && event.target.files.length) {
  this.uploadedImage = event.target.files[0];
  this.isImageUpdated =true;
  const reader = new FileReader();
  reader.readAsDataURL(this.uploadedImage);
  reader.onload = () => { this.myImage = reader.result as string; };
  }
  
 this.currentOuvrier.chantier = this.chantiers.find(cat => cat.idChantier == 
    this.updatedChId)!;
    //tester si l'image du produit a été modifiée
    if (this.isImageUpdated)
    { 
    this.ouvrierService
    .uploadImage(this.uploadedImage, this.uploadedImage.name)
    .subscribe((img: Image) => {
    this.currentOuvrier.image = img;
    this.ouvrierService
    .updateOuvrier(this.currentOuvrier)
    .subscribe((prod) => {
    this.router.navigate(['ouvriers']);
    });
    });
    }
    else{ 
    this.ouvrierService
    .updateOuvrier(this.currentOuvrier)
    .subscribe((prod) => {
    this.router.navigate(['ouvriers']);
    });
    }
   
     this.currentOuvrier.chantier = this.chantiers.find(cat => cat.idChantier == 
      this.updatedChId)!; 
      this.ouvrierService
      .updateOuvrier(this.currentOuvrier)
      .subscribe((prod) => {
      this.router.navigate(['ouvriers']);
      });
    
  }*/
  supprimerImage(img: Image){
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
    this.ouvrierService.supprimerImage(img.idImage).subscribe(() => {
    //supprimer image du tableau currentProduit.images 
    const index = this.currentOuvrier.images.indexOf(img, 0);
    if (index > -1) {
    this.currentOuvrier.images.splice(index, 1);
    }
    });
    }
    

}
