import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VideosComponent} from './videos.component';

const routes: Routes = [
  {
    path: '',
    component: VideosComponent,
    children: [
      {
        path: 'explore',
        loadChildren: () => import('./explore/explore.module').then(m => m.ExploreModule)
      },
      {
        path: 'my',
        loadChildren: () => import('./space/space.module').then(m => m.SpaceModule)
      },
      {
        path: 'detail',
        loadChildren: () => import('./detail/detail.module').then(m => m.DetailModule)
      },
      {
        path: '**',
        redirectTo: 'explore',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideosRoutingModule {}
