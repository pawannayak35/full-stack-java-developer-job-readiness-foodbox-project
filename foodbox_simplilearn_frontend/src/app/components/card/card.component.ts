import { FoodboxService } from './../../services/foodbox.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/Model/Cart/cart';
import { ProductList } from 'src/app/Model/product-list/product-list';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{

  @Input() filterData: string;
  productList: ProductList[];
  proList: ProductList;
  proCart: Cart;

  constructor(private router: Router, private foodboxService: FoodboxService) {}

  ngOnInit(): void {
    this.foodboxService.getAllProductList().subscribe(data => this.productList = data);
  }

  order(dishName: any, cuisine: any, price: any, desc: any, url: any, qty: any, rating: any, reviews: any) {

    this.proCart = {
      dishName : dishName,
      cuisine: cuisine,
      price: price,
      description: desc,
      rating: rating,
      reviews: reviews,
      imgURL: url,
      quantity: qty
    }

    this.foodboxService.saveCart(this.proCart).subscribe(x => console.log(x));
    this.router.navigate(['/cart']);
  }

}
