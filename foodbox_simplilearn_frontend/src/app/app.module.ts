import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { CardComponent } from './components/card/card.component';
import { CartComponent } from './components/cart/cart.component';
import { CartCardComponent } from './components/cart-card/cart-card.component';
import { ContactComponent } from './components/contact/contact.component';
import { AdminComponent } from './components/credential/admin/admin.component';
import { LoginComponent } from './components/credential/login/login.component';
import { SignupComponent } from './components/credential/signup/signup.component';
import { DescCardComponent } from './components/desc-card/desc-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AddProductComponent } from './components/ManageProduct/add-product/add-product.component';
import { ChangePasswordComponent } from './components/ManageProduct/change-password/change-password.component';
import { EditProductComponent } from './components/ManageProduct/edit-product/edit-product.component';
import { HomeProductComponent } from './components/ManageProduct/home-product/home-product.component';
import { OrderListComponent } from './components/ManageProduct/order-list/order-list.component';
import { ProductDetailsComponent } from './components/ManageProduct/product-details/product-details.component';
import { ProductListComponent } from './components/ManageProduct/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CardComponent,
    CartComponent,
    CartCardComponent,
    ContactComponent,
    AdminComponent,
    LoginComponent,
    SignupComponent,
    DescCardComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    AddProductComponent,
    ChangePasswordComponent,
    EditProductComponent,
    HomeProductComponent,
    OrderListComponent,
    ProductDetailsComponent,
    ProductListComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxTypedJsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
