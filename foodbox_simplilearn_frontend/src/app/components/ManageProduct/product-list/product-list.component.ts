import { FoodboxService } from 'src/app/services/foodbox.service';
import { Component, OnInit } from '@angular/core';
import { ProductList } from 'src/app/Model/product-list/product-list';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

  // Injected foodbox service dependency in component (here...)
  constructor(private foodboxService: FoodboxService) {}

  productList: ProductList[];

  ngOnInit(): void {
    this.foodboxService.getAllProductList().subscribe(data => this.productList = data);
  }

  delete(id: any) {
    this.foodboxService.deleteProductList(id).subscribe(data => console.log(data));
    this.productList = this.productList.filter(data => data.pListId != id);
  }

}
