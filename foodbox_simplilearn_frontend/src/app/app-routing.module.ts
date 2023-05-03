import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { SignupComponent } from './components/credential/signup/signup.component';
import { LoginComponent } from './components/credential/login/login.component';
import { AdminComponent } from './components/credential/admin/admin.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeProductComponent } from './components/ManageProduct/home-product/home-product.component';
import { OrderListComponent } from './components/ManageProduct/order-list/order-list.component';
import { ChangePasswordComponent } from './components/ManageProduct/change-password/change-password.component';
import { ProductListComponent } from './components/ManageProduct/product-list/product-list.component';
import { AddProductComponent } from './components/ManageProduct/add-product/add-product.component';
import { ProductDetailsComponent } from './components/ManageProduct/product-details/product-details.component';
import { EditProductComponent } from './components/ManageProduct/edit-product/edit-product.component';

const routes: Routes = [
  {
    path: 'product-details/:id',
    component: ProductDetailsComponent
  },
  {
    path: 'manage-product',
    component: HomeProductComponent,
    children: [
      {
        path: 'edit-product/:id',
        component: EditProductComponent
      },
      {
        path: 'order-list',
        component: OrderListComponent
      },
      {
        path: 'change-password',
        component: ChangePasswordComponent
      },
      {
        path: 'product-list',
        component: ProductListComponent
      },
      {
        path: 'add-product',
        component: AddProductComponent
      },
      {
        path: '',
        component: ProductListComponent
      },
      {
        path: '**',
        component: ProductListComponent
      }
    ]
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'product',
    component: ProductComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
