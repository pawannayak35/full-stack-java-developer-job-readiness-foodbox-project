import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerCreden } from 'src/app/Model/Credential/Customer/customer-creden';
import { FoodboxService } from 'src/app/services/foodbox.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  customerCreden: CustomerCreden[];

  constructor(private router: Router, private foodboxService: FoodboxService) {}

  ngOnInit(): void {
    this.foodboxService.getAllCustomerCreden().subscribe(data => this.customerCreden = data);
  }

  login(custUser: any, custPass: any) {

    for(let x of this.customerCreden) {
      if(x.username == custUser && x.password == custPass) {
        this.router.navigate(['/product']);
      }
    }
  }

  switchSignUp(): any {
    this.router.navigate(['signup']);
  }

}
