import { Component, input, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCard } from '../product-card/product-card';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {
  productsInput = input.required<Product[]>();
  displayProducts = signal<Product[]>([]);

  constructor() {
    effect(() => {
      this.displayProducts.set(this.productsInput());
    }, { allowSignalWrites: true });
  }
  handleRemove(productId: number) {
    this.displayProducts.update(products =>
      products.filter(p => p.id !== productId)
    );
  }
}
