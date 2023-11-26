import { Chantier } from "./Chantier.model";
import{Image} from "./Image.model";
export class Ouvrier {
    idOuvrier? : number;
    nom? : string;
    tel?:String;
    dateEmbauche? : Date ;
    salaire? : number;
    chantier! : Chantier;
    image! : Image
    imageStr!:string
    images!: Image[];

}