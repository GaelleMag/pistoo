import { componentFactoryName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LauncherComponent } from './launcher/launcher.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { StoriesComponent } from './stories.component';
import { StoryListComponent } from './story-list/story-list.component';
import { StoryComponent } from './story/story.component';

const routes: Routes = [
  {
    path: '',
    component: StoriesComponent,
    children: [
      {
          path: 'enigmes',
          loadChildren: () => import('./enigmes/enigmes.module').then(m => m.EnigmesModule)
        },
        {
          path: 'maps',
          loadChildren: () => import('./maps/maps.module').then(m => m.MapsModule)
        },
        {
          path: 'home',
          component: LauncherComponent
        },
        {
          path: '',
          component: NavBarComponent
        },
      {
        path: 'story/:number',
        component: StoryComponent
      },
      {
        path: 'list', 
        component: StoryListComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoriesRoutingModule { }
