import { FoodboxService } from 'src/app/services/foodbox.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{

  productList: any;

  constructor(private activateRoute: ActivatedRoute, private foodboxService: FoodboxService) {}

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.paramMap.get('id');
    this.foodboxService.getProductListById(Number(id)).subscribe(d => this.productList = d);
  }

}
