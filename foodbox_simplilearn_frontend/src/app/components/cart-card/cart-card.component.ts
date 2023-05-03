import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/Model/Cart/cart';
import { Customer } from 'src/app/Model/Customer/customer';
import { FoodboxService } from 'src/app/services/foodbox.service';

@Component({
  selector: 'app-cart-card',
  templateUrl: './cart-card.component.html',
  styleUrls: ['./cart-card.component.css']
})
export class CartCardComponent implements OnInit{

  cartData: Cart[];
  customer: Customer;
  constructor(private router: Router, private foodboxService: FoodboxService) {}


  ngOnInit(): void {
    this.foodboxService.getAllCarts().subscribe(x => this.cartData = x);
  }

  deleteCart(cart: Cart) {
    this.cartData = this.cartData.filter(data => data.cartId !== cart.cartId);
    this.foodboxService.deleteCartById(Number(cart.cartId)).subscribe(x => console.log(x));

    this.router.navigate(['/cart']);
  }

  qtyVal: number = 1;

  dec(dec: any) {
    this.qtyVal = Number(dec);
  }

  placeOrder(cartAllData: any, name: any, age: any, gen: any, email: any, add: any, mob: any) {

    this.customer = {
      name: name,
      age: age,
      gender: gen,
      email: email,
      address: add,
      mobile: mob,
      products: cartAllData
    }

    this.foodboxService.placeOrder(this.customer).subscribe(x => console.log(x));
    alert("Your Order Placed Successfully !");
    this.router.navigate(['/home']);
  }

}
