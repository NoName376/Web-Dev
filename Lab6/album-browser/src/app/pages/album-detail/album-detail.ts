import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AlbumService } from '../../services/album';
import { switchMap } from 'rxjs';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './album-detail.html',
  styleUrls: ['./album-detail.css']
})
export class AlbumDetail {

  private route = inject(ActivatedRoute);
  private service = inject(AlbumService);

  album: any;

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap(params => this.service.getAlbum(Number(params.get('id'))))
    ).subscribe(data => this.album = data);
  }

  save() {
    if (!this.album) return;

    this.service.updateAlbum(this.album).subscribe(updated => {
      this.album = updated;
    });
  }
}
