import { ActivatedRoute, Router } from '@angular/router';
import { FoodboxService } from 'src/app/services/foodbox.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ProductList } from 'src/app/Model/product-list/product-list';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit{

  prodList: ProductList;
  id: string|null;
  updateProductForm: FormGroup;
  submitted: boolean = false;

  constructor(private foodboxService: FoodboxService, private activatedRoute: ActivatedRoute, private builder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    this.foodboxService.getProductListById(Number(this.id)).subscribe(x => this.prodList = x);

    this.updateProductForm = this.builder.group({
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
    return this.updateProductForm.controls;
  }

  onUpdate() {
    this.submitted = true;

    if(this.updateProductForm.invalid){
      return
    }else{
      this.foodboxService.updateProductList(this.prodList, Number(this.id)).subscribe(x => console.log(x));
      alert("Data Updated Successfully !");
      this.router.navigate(['manage-product']);
    }
  }

}
