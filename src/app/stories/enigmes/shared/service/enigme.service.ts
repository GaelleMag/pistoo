import { Injectable } from '@angular/core';
import { Enigme } from '../model/enigme.model';

@Injectable({
  providedIn: 'root'
})
export class EnigmeService {

  enigmeList: Enigme[] =  [];

  constructor() {
    const enigme1: Enigme = new Enigme;
    enigme1.title = "Lugdunum";
    enigme1.image = "/../../../../assets/img/lugdunum.jpg"; 
    enigme1.context= "Lugdunum (ou Lugudunum), aujourd'hui Lyon, est le nom du site gaulois où une colonie de droit romain fut fondée en -43 par Lucius Munatius Plancus, alors gouverneur de la Gaule, sous la titulature initiale de Colonia Copia Felix Munatia Lugudunum. Cette colonie, fondée à l'occasion des troubles qui suivent l'assassinat de Jules César en -44, devint la capitale des Gaules à partir -27.";
    enigme1.question = "Mais que signifie Lugdunum?";
    // enigme1.answer: string= "";
    this.enigmeList.push(enigme1);
   }
}
