import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnigmesRoutingModule } from './enigmes-routing.module';
import { EnigmesComponent } from './enigmes.component';
import { EnigmeComponent } from './enigme/enigme.component';
import { EnigmeFormComponent } from './enigme-form/enigme-form.component';


@NgModule({
  declarations: [
    EnigmesComponent, 
    EnigmeComponent, 
    EnigmeFormComponent],
  
  imports: [
    CommonModule,
    EnigmesRoutingModule,
  ],
  exports:[
    EnigmesComponent,
  ]
  
})
export class EnigmesModule { }
