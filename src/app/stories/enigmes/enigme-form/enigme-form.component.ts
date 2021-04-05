import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Enigme } from '../shared/model/enigme.model';
import { EnigmeService } from '../shared/service/enigme.service';
import * as M from 'materialize-css';

@Component({
  selector: 'app-enigme-form',
  templateUrl: './enigme-form.component.html',
  styleUrls: ['./enigme-form.component.scss']
})
export class EnigmeFormComponent implements OnInit {

  enigme: Enigme;
  constructor(
    public enigmeService: EnigmeService,
    private activeRoute: ActivatedRoute) { 
      const number = '1';
      this.enigme = new Enigme;
      this.activeRoute?.params.subscribe((params: any) => {
        this.enigme = enigmeService.enigmeList[+params['number']]
      });
   
    }

  ngOnInit(): void {
    M.AutoInit();
  }

}
