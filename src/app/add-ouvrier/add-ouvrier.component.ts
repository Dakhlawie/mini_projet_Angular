import { Component, OnInit } from '@angular/core';
import { Ouvrier } from '../model/ouvrier.model';
import { Image } from '../model/Image.model';
import { OuvrierService } from '../ouvrier.service';
import { Chantier } from '../model/Chantier.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-ouvrier',
  templateUrl: './add-ouvrier.component.html',
  styleUrls: ['./add-ouvrier.component.css']
})
export class AddOuvrierComponent implements OnInit{
  ngOnInit(): void {
    this.ouvrierService.listeChantier().
subscribe(cats => {this.chantiers = cats;
console.log(cats);
});



  }
  chantiers! : Chantier[];
newIdChantier! : number;
newChantier! : Chantier;
uploadedImage!: File;
imagePath: any;
  newOuvrier = new Ouvrier();
  constructor(private ouvrierService: OuvrierService,private router :Router) { }
  addOuvrier(){

    /*this.ouvrierService
    .uploadImage(this.uploadedImage, this.uploadedImage.name)
    .subscribe((img: Image) => {
      this.newOuvrier.image = img;
      this.newOuvrier.imageStr = img.idImage.toString(); // mettez à jour l'id de l'image
      this.newOuvrier.chantier = this.chantiers.find(cat => cat.idChantier == this.newIdChantier)!;
      this.ouvrierService
        .ajouterOuvrier(this.newOuvrier)
        .subscribe(() => {
          this.router.navigate(['ouvriers']);
        });
    });*/
    this.newOuvrier.chantier= this.chantiers.find(cat => cat.idChantier
      == this.newIdChantier)!;
      this.ouvrierService
      .ajouterOuvrier(this.newOuvrier)
      .subscribe((prod) => {
      this.ouvrierService
      .uploadImageFS(this.uploadedImage, 
      this.uploadedImage.name,prod.idOuvrier)
      .subscribe((response: any) => {}
      );
      this.router.navigate(['ouvriers']).then(() => {
        window.location.reload()
    
        });
      });
      

}
  onImageUpload(event: any) {
    this.uploadedImage = event.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(this.uploadedImage);
    reader.onload = (_event) => { this.imagePath = reader.result; }
    }
    
    

}
