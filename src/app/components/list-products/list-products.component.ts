import { Component } from '@angular/core';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})
export class ListProductsComponent {
  listProducts: Product[] = [
    {id: 1, name: "Banana", description: "Fruta amarela e tals", price: 12, stock:200},
    {id: 2, name: "Vodka", description: "bebida", price: 20, stock:100},

  ]
}
