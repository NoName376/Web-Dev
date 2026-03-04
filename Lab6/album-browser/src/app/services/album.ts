import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap, map } from 'rxjs';
import { AlbumModel } from '../models/albumModel';
import { PhotoModel } from '../models/photoModel';

@Injectable({ providedIn: 'root' })
export class AlbumService {

  private baseUrl = 'https://jsonplaceholder.typicode.com';

  private albumsCache: AlbumModel[] | null = null;

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<AlbumModel[]> {
    if (this.albumsCache) {
      return of(this.albumsCache);
    }
    return this.http.get<AlbumModel[]>(`${this.baseUrl}/albums`).pipe(
      tap(data => this.albumsCache = data)
    );
  }

  getAlbum(id: number): Observable<AlbumModel> {
    if (this.albumsCache) {
      const album = this.albumsCache.find(a => a.id === id);
      if (album) return of(album);
    }
    return this.http.get<AlbumModel>(`${this.baseUrl}/albums/${id}`);
  }

  getAlbumPhotos(id: number): Observable<PhotoModel[]> {
    return this.http.get<PhotoModel[]>(`${this.baseUrl}/albums/${id}/photos`);
  }

  updateAlbum(album: AlbumModel): Observable<AlbumModel> {
    return this.http.put<AlbumModel>(`${this.baseUrl}/albums/${album.id}`, album).pipe(
      tap(updated => {
        if (this.albumsCache) {
          const index = this.albumsCache.findIndex(a => a.id === updated.id);
          if (index !== -1) {
            this.albumsCache[index] = updated;
          }
        }
      })
    );
  }

  deleteAlbum(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/albums/${id}`).pipe(
      tap(() => {
        if (this.albumsCache) {
          this.albumsCache = this.albumsCache.filter(a => a.id !== id);
        }
      })
    );
  }
}
