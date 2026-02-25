import { Component, input, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {
  product = input.required<Product>();
  remove = output<number>();

  private _selectedThumb = signal<string | null>(null);

  get displayImage(): string {
    return this._selectedThumb() || this.product().image;
  }

  setThumbnail(img: string) {
    this._selectedThumb.set(img);
  }

  like() {
    this.product().likes++;
  }

  delete() {
    this.remove.emit(this.product().id);
  }

  share(platform: 'tg' | 'wa') {
    const url = encodeURIComponent(this.product().link);
    const text = encodeURIComponent(`Check out this: ${this.product().name}`);
    const link = platform === 'tg'
      ? `https://t.me/share/url?url=${url}&text=${text}`
      : `https://wa.me/?text=${text}%20${url}`;
    window.open(link, '_blank');
  }
}
