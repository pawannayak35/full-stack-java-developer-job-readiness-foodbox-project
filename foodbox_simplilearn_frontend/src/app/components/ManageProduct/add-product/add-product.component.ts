import { FoodboxService } from 'src/app/services/foodbox.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductList } from 'src/app/Model/product-list/product-list';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{

  productList: ProductList = new ProductList();

  constructor(private builder: FormBuilder, private router: Router, private foodboxService: FoodboxService) {}

  addProductForm: FormGroup;
  submitted: boolean = false;

  ngOnInit(): void {
    this.addProductForm = this.builder.group({
      name: ['', Validators.required],
      cuisine: ['', Validators.required],
      url: ['', Validators.required],
      qty: ['', Validators.required],
      price: ['', Validators.required],
      rat: ['', Validators.required],
      rew: ['', Validators.required],
      desc: ['', Validators.required]
    });
  }

  get form() {
    return this.addProductForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if(this.addProductForm.invalid){
      return
    }else{
      this.foodboxService.saveProductList(this.productList).subscribe(data => console.log(data));
      this.router.navigate(['/manage-product']);
    }
  }

}
