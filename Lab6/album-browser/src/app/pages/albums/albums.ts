import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AlbumService } from '../../services/album';
import { AlbumModel } from '../../models/albumModel';

interface State {
  loading: boolean;
  data: AlbumModel[];
  error: boolean;
}

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './albums.html',
  styleUrls: ['./albums.css']
})
export class AlbumsComponent {

  private service = inject(AlbumService);

  private stateSubject = new BehaviorSubject<State>({
    loading: true,
    data: [],
    error: false
  });

  albums$ = this.stateSubject.asObservable();

  ngOnInit() {
    this.service.getAlbums().subscribe({
      next: data => {
        this.stateSubject.next({
          loading: false,
          data: data,
          error: false
        });
      },
      error: () => {
        this.stateSubject.next({
          loading: false,
          data: [],
          error: true
        });
      }
    });
  }

  delete(id: number) {
    const current = this.stateSubject.value;

    this.service.deleteAlbum(id).subscribe(() => {
      this.stateSubject.next({
        ...current,
        data: current.data.filter(a => a.id !== id)
      });
    });
  }
}
