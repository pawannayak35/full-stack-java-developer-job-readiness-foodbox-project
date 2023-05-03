import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-product',
  templateUrl: './home-product.component.html',
  styleUrls: ['./home-product.component.css']
})
export class HomeProductComponent implements OnInit{


  username: any;

  constructor(private router: Router) {
    this.username = this.router.getCurrentNavigation()?.extras.state?.['u'];
  }

  ngOnInit(): void {
    
  }

}
