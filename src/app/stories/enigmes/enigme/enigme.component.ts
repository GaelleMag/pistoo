import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Enigme } from '../shared/model/enigme.model';
import { EnigmeService } from '../shared/service/enigme.service';
import * as M from 'materialize-css';

@Component({
  selector: 'app-enigme',
  templateUrl: './enigme.component.html',
  styleUrls: ['./enigme.component.scss']
})
export class EnigmeComponent implements OnInit {
 
 enigme: Enigme;
constructor(
  private enigmeService: EnigmeService,
  private activeRoute: ActivatedRoute) {
    this.enigme = new Enigme;
    this.activeRoute?.params.subscribe((params: any) => {
      this.enigme = enigmeService.enigmeList[+params['number']-1]
    });

  
   }

  ngOnInit(): void {
    M.AutoInit();
  }

}
