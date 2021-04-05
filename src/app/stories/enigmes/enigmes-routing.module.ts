import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnigmeFormComponent } from './enigme-form/enigme-form.component';
import { EnigmeComponent } from './enigme/enigme.component';
import { EnigmesComponent } from './enigmes.component';


const routes: Routes = [
  {
    path: '',
    component: EnigmesComponent,
    children: [
      {
        path: 'context/:number',
        component:EnigmeComponent
      },
      {
        path: 'form',
        component: EnigmeFormComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnigmesRoutingModule { }
