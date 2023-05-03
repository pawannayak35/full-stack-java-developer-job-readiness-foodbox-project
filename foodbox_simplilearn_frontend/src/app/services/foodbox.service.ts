import { Customer } from './../Model/Customer/customer';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { ProductList } from '../Model/product-list/product-list';
import { Cart } from '../Model/Cart/cart';
import { AdminCreden } from '../Model/Credential/Admin/admin-creden';
import { CustomerCreden } from '../Model/Credential/Customer/customer-creden';

@Injectable({
  providedIn: 'root'
})
export class FoodboxService {

  private _productListUrl = "http://localhost:9595/api/foodbox/product/list";
  private _orderListUrl = "http://localhost:9595/api/foodbox/order/list";
  private _cartUrl = "http://localhost:9595/api/foodbox/cart";
  private _customerUrl = "http://localhost:9595/api/foodbox/customer";
  private _adminCredentialUrl = "http://localhost:9595/api/foodbox/admin/credential";
  private _customerCredentialUrl = "http://localhost:9595/api/foodbox/customer/credential";

  constructor(private http: HttpClient) { }


  // --------------------- Customer & Product ---------------------

  // 1. Get Method
  getAllOrderList(): Observable<Customer[]>{
    return this.http.get<Customer[]>(this._orderListUrl);
  }

  // 2. Post Method
  placeOrder(customer: Customer): Observable<Customer>{
    return this.http.post<Customer>(this._customerUrl, customer);
  }

  // 3. Delete Method
  deleteCustomerProductDetailsById(id: number): Observable<Customer> {
    return this.http.delete<Customer>(`${this._customerUrl}/${id}`);
  }

  // -------------------- Product List ------------------------

  // 1. Get Method
  getAllProductList(): Observable<ProductList[]>{
    return this.http.get<ProductList[]>(this._productListUrl);
  }

  getProductListById(id: number): Observable<ProductList>{
    return this.http.get<ProductList>(`${this._productListUrl}/${id}`);
  }

  // 2. Post Method
  saveProductList(productlist: ProductList): Observable<ProductList>{
    return this.http.post<ProductList>(this._productListUrl, productlist);
  }

  // 3. Put Method
  updateProductList(productlist: ProductList, id: number): Observable<ProductList>{
    return this.http.put<ProductList>(`${this._productListUrl}/${id}`, productlist);
  }

  // 4. Delete Method
  deleteProductList(id: number): Observable<ProductList>{
    return this.http.delete<ProductList>(`${this._productListUrl}/${id}`);
  }

  // ---------------------- Cart -------------------------

  // 1. Get Method
  getAllCarts(): Observable<Cart[]>{
    return this.http.get<Cart[]>(this._cartUrl);
  }

  getCartById(id: number): Observable<Cart>{
    return this.http.get<Cart>(`${this._cartUrl}/${id}`);
  }

  // 2. Post Method
  saveCart(cart: Cart): Observable<Cart>{
    return this.http.post<Cart>(this._cartUrl, cart);
  }

  // 3. Delete Method
  deleteCartById(id: number): Observable<Cart>{
    return this.http.delete<Cart>(`${this._cartUrl}/${id}`);
  }

  // --------------------------- Admin Credential ----------------------

  // 1. Get Method
  getAllAdmin(): Observable<AdminCreden[]>{
    return this.http.get<AdminCreden[]>(this._adminCredentialUrl);
  }

  getAdminById(id: number): Observable<AdminCreden>{
    return this.http.get<AdminCreden>(`${this._adminCredentialUrl}/${id}`);
  }

  // 2. Put Method
  updateAdminById(admincredential: AdminCreden, id: number): Observable<AdminCreden>{
    return this.http.put<AdminCreden>(`${this._adminCredentialUrl}/${id}`, admincredential);
  }

  // ------------------------- Customer Credential ------------------------
  // 1. Get Method
  getAllCustomerCreden(): Observable<CustomerCreden[]>{
    return this.http.get<CustomerCreden[]>(this._customerCredentialUrl);
  }

  // 2. Post Method
  saveCustomerCreden(customercredential: CustomerCreden): Observable<CustomerCreden>{
    return this.http.post<CustomerCreden>(this._customerCredentialUrl, customercredential);
  }

}
