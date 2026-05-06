import { Component, OnInit, signal } from '@angular/core';
import { ProductService } from './services/product';
import { Category } from './models/category.model';
import { Product } from './models/product.model';
import { ProductList } from './components/product-list/product-list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  categories = signal<Category[]>([]);
  selectedCategoryId = signal<number | null>(null);
  filteredProducts = signal<Product[]>([]);

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getCategories().subscribe((data) => {
      this.categories.set(data);
    });
  }

  selectCategory(id: number) {
    this.selectedCategoryId.set(id);
    this.productService.getProductsByCategory(id).subscribe((data) => {
      this.filteredProducts.set(data);
    });
  }
}
