import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Story } from '../shared/model/story.model';
import { StoryService } from '../shared/service/story.service';
import * as M from 'materialize-css';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {

  story: Story;

  constructor(
    private storyService: StoryService,
    private activeRoute: ActivatedRoute) {
      this.story = new Story;
      this.activeRoute?.params.subscribe((params: any) => {
        console.log('hey!'),
        this.story = storyService.storyList[+params['number']-1]; 
      });
     // fonction activeRoute qui permet d'afficher le 1, 2 ou 3.

   }

  ngOnInit(): void {
    M.AutoInit();
  }

}
