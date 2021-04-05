import { NgModule, ResolvedReflectiveFactory } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoryComponent } from './stories/story/story.component';

const routes: Routes = [

{
  path: 'stories',
  loadChildren: () => import('./stories/stories.module').then(m => m.StoriesModule)
},
{
  path: '**',
  redirectTo: 'stories/home'
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
