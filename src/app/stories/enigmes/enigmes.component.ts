import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css';

@Component({
  selector: 'app-enigmes',
  templateUrl: './enigmes.component.html',
  styleUrls: ['./enigmes.component.scss']
})
export class EnigmesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
M.AutoInit();
  }

}
