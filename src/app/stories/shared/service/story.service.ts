import { Injectable } from '@angular/core';
import { Story } from '../model/story.model';

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  storyList: Story [] = [];
  
  constructor() {
    const story0 : Story = new Story; // nouveau model de la story
    story0.title = "Parcours 1 : Le Vieux-Lyon"; // + tous les élements cf model, pareil que enigme.service.ts
    story0.image = "/../../../../assets/img/vieuxLyon.jpg"
    story0.description = "Découvrez le Vieux-Lyon avec ses traboules et leurs secrets ! Vous déambulerez dans ce quartier préservé depuis le XVIe sciècle à travers ses façades, ses gargouilles, ses passages et ses rues pavées.";
    story0.level = "Facile";
    story0.distance = "2 km";
    story0.time = "56 mn";
    this.storyList.push(story0);

    const story1 : Story = new Story;
    story1.title = "Parcours 2 : La Croix-Rousse";
    story1.image = "/../../../../assets/img/croixRousse.jpg"
    story1.description = "Découvrez la Croix-Rousse avec ses pentes semées de traboules et d’escaliers les périodes gallo-romaines! Vous décrouvirez l'histoire des canuts par son dédale de rues, de passage et de places accrochées à la colline.";
    story1.level = "Facile";
    story1.distance = "2 Km";
    story1.time = "56 mn"
    this.storyList.push(story1); // + story3
    

   
   }
}
