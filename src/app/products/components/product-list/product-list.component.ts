import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../models/product.model';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private http: HttpClient, private _cartService: CartService) {}

  ngOnInit(): void {
    this.http.get('https://fakestoreapi.com/products').subscribe({
      next: (res: any)=>{
        this.products = res;
        
      },
      error: (err: any) => {
        console.log(err);
        
      }
    })
  }
  onAddToCart(item: Product){
    this._cartService.onCountIncrement();
    this._cartService.onItemAdded(item);
  }

}