import { FoodboxService } from './../../../services/foodbox.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminCreden } from 'src/app/Model/Credential/Admin/admin-creden';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{

  adminCreden: AdminCreden[];
  constructor(private router: Router, private foodboxService: FoodboxService) {}

  ngOnInit(): void {
    this.foodboxService.getAllAdmin().subscribe(data => this.adminCreden = data);
  }

  adminCred(user: any, pass: any) {
    for(let x of this.adminCreden) {
      if(x.username == user && x.password == pass) {
        this.router.navigate(['/manage-product'], {state: {u: x.username}});
      }else{
        alert("You Entered Wrong Username & Password ! Try Again !");
      }
    }
  }

  changeAdmin() {
    this.router.navigate(['/manage-product/change-password']);
  }

}
