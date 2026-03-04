import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../../services/album';
import { switchMap } from 'rxjs';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './album-photos.html',
  styleUrls: ['./album-photos.css']
})
export class AlbumPhotos {

  private route = inject(ActivatedRoute);
  private service = inject(AlbumService);

  photos$ = this.route.parent!.paramMap.pipe(
    switchMap(params =>
      this.service.getAlbumPhotos(Number(params.get('id')))
    )
  );
}

