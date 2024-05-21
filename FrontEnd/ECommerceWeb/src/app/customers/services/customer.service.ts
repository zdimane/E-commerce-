import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserStorageService } from 'src/app/services/storage/user-storage.service';
const BASIC_URL = "http://localhost:8080/"

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  getAllProducts(categoryDto:any, skipAuthorization = false): Observable<any>{
    let headers = skipAuthorization ? {} : { headers: this.createAuthorizationHeader() };
      return this.http.get(BASIC_URL + 'api/customer/products', headers)

  }

  getAllProductsByName(name:any, skipAuthorization = false): Observable<any>{
    let headers = skipAuthorization ? {} : { headers: this.createAuthorizationHeader() };
      return this.http.get(BASIC_URL + `api/customer/search/${name}`, headers)

  }

  addToCart(productId:any, skipAuthorization = false): Observable<any>{
    const cartDto = {
      productId: productId,
      userId: UserStorageService.getUserId()
    }
    let headers = skipAuthorization ? {} : { headers: this.createAuthorizationHeader() };
      return this.http.post(BASIC_URL + `api/customer/search/cart`,cartDto, headers)

  }

  increaseProductQuantity(productId:any, skipAuthorization = false): Observable<any>{
    const cartDto = {
      productId: productId,
      userId: UserStorageService.getUserId()
    }
    let headers = skipAuthorization ? {} : { headers: this.createAuthorizationHeader() };
      return this.http.post(BASIC_URL + `api/customer/addition`,cartDto, headers)

  }

  decreaseProductQuantity(productId:any, skipAuthorization = false): Observable<any>{
    const cartDto = {
      productId: productId,
      userId: UserStorageService.getUserId()
    }
    let headers = skipAuthorization ? {} : { headers: this.createAuthorizationHeader() };
      return this.http.post(BASIC_URL + `api/customer/deduction`,cartDto, headers)

  }

  getCartByUserId(skipAuthorization = false): Observable<any>{
    const userId = UserStorageService.getUserId()
    let headers = skipAuthorization ? {} : { headers: this.createAuthorizationHeader() };
      return this.http.get(BASIC_URL + `api/customer/search/cart/${userId}`, headers)

  }

  applyCoupon(code:any, skipAuthorization = false): Observable<any>{
    const userId = UserStorageService.getUserId()
    let headers = skipAuthorization ? {} : { headers: this.createAuthorizationHeader() };
      return this.http.get(BASIC_URL + `api/customer/coupon/${userId}/${code}`, headers)

  }

  placeOrder(orderDto:any, skipAuthorization = false): Observable<any>{
    orderDto.userId = UserStorageService.getUserId()
    let headers = skipAuthorization ? {} : { headers: this.createAuthorizationHeader() };
      return this.http.post(BASIC_URL + `api/customer/placeOrder`, orderDto, headers)

  }

  private createAuthorizationHeader(): HttpHeaders{
    return new HttpHeaders().set(
      'Authorization', 'Bearer' + UserStorageService.getToken()
    )
  }

}
