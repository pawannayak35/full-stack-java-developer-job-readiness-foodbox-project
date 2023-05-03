import { FoodboxService } from 'src/app/services/foodbox.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent  implements OnInit{

  orderList: any;

  constructor(private foodboxService: FoodboxService) {}

  ngOnInit(): void {
    this.foodboxService.getAllOrderList().subscribe(data => this.orderList = data);
  }

  orderDelete(id: number) {
    this.foodboxService.deleteCustomerProductDetailsById(Number(id)).subscribe(data => console.log(data));
    this.orderList = this.orderList.filter( (X: { cusId: number; }) => X.cusId !== id );
  }

}
