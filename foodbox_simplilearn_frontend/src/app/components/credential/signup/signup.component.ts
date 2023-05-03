import { FoodboxService } from 'src/app/services/foodbox.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerCreden } from 'src/app/Model/Credential/Customer/customer-creden';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  custCreden: CustomerCreden;

  constructor(private router: Router, private foodboxService: FoodboxService) {}

  signup(username: any, password: any) {

    this.custCreden = {
      username: username,
      password: password
    }

    this.foodboxService.saveCustomerCreden(this.custCreden).subscribe(x => alert("You Data Save Successfully ! Now You can Logged In."));
  }

  switchLogin(): any {
    this.router.navigate(['login']);
  }

}
