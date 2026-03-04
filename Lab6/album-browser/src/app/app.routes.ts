import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Images } from './images/images'
import { AlbumsComponent } from './pages/albums/albums';
import { AlbumDetail } from './pages/album-detail/album-detail';
import { AlbumPhotos } from './pages/album-photos/album-photos';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'images', component: Images },
  {
    path: 'albums',
    children: [
      { path: '', component: AlbumsComponent },
      {
        path: ':id',
        component: AlbumDetail,
        children: [
          { path: 'photos', component: AlbumPhotos }
        ]
      }
    ]
  }
];
