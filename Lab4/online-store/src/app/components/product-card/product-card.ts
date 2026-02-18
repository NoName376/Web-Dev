import { Component, Input } from '@angular/core';
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
  @Input() product!: Product;
  currentImage: string = '';

  share(platform: 'tg' | 'wa') {
    const url = encodeURIComponent(this.product.link);
    const text = encodeURIComponent(`Смотри, какой ${this.product.name} на Kaspi!`);

    const link = platform === 'tg'
      ? `https://t.me/share/url?url=${url}&text=${text}`
      : `https://wa.me/?text=${text}%20${url}`;

    window.open(link, '_blank');
  }
}
