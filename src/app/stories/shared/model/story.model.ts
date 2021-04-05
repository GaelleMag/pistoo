import { Enigme } from "../../enigmes/shared/model/enigme.model";

export class Story {

    public title: string="";
    public image: string= ""; 
    public description: string = "";
    enigmeList: Enigme[] = []; //mon attribut est de type tableau d'enigme et ce tableau est vide pour le moment donc faudra le mettre en dur
    public level: string=""; //représentent les icones
    public distance: string="";
    public time: string="";
}
