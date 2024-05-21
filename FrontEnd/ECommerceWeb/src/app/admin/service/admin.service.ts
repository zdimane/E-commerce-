import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserStorageService } from 'src/app/services/storage/user-storage.service';
const BASIC_URL = "http://localhost:8080/"

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  getCoupons: any;

  constructor(private http: HttpClient) { }

  addCategory(categoryDto:any, skipAuthorization = false): Observable<any>{
    let headers = skipAuthorization ? {} : { headers: this.createAuthorizationHeader() };
    return this.http.post(BASIC_URL + 'api/admin/category', categoryDto, headers)
  }

  // getAllCategories(categoryDto:any, skipAuthorization = false): Observable<any>{
  //   let headers1 = skipAuthorization ? {} : { headers: this.createAuthorizationHeader() };
  //   return this.http.get(BASIC_URL + 'api/admin/category', categoryDto, headers1)
  // }

  getAllCategories(categoryDto:any, skipAuthorization = false): Observable<any>{
    let headers = skipAuthorization ? {} : { headers: this.createAuthorizationHeader() };
      return this.http.post(BASIC_URL + 'api/admin', categoryDto, headers)
        
  }
  addProduct(productDto:any, skipAuthorization = false): Observable<any>{
    let headers = skipAuthorization ? {} : { headers: this.createAuthorizationHeader() };
    return this.http.post(BASIC_URL + 'api/admin/product', productDto, headers)
  }

  getAllProducts(categoryDto:any, skipAuthorization = false): Observable<any>{
    let headers = skipAuthorization ? {} : { headers: this.createAuthorizationHeader() };
      return this.http.post(BASIC_URL + 'api/admin/products', categoryDto, headers)
        
  }

  getAllProductsByName(name:any, skipAuthorization = false): Observable<any>{
    let headers = skipAuthorization ? {} : { headers: this.createAuthorizationHeader() };
      return this.http.post(BASIC_URL + `api/admin/search/${name}`, name, headers)
        
  }

  deleteProduct(productId:any, skipAuthorization = false): Observable<any>{
    let headers = skipAuthorization ? {} : { headers: this.createAuthorizationHeader() };
    return this.http.delete(BASIC_URL + `api/admin/product/${productId}`, headers)
  }

  addCoupon(couponDto:any, skipAuthorization = false): Observable<any>{
    let headers = skipAuthorization ? {} : { headers: this.createAuthorizationHeader() };
    return this.http.post(BASIC_URL + 'api/admin/coupons', couponDto, headers)
  }

  addCoupons(skipAuthorization = false): Observable<any>{
    let headers = skipAuthorization ? {} : { headers: this.createAuthorizationHeader() };
    return this.http.get(BASIC_URL + 'api/admin/coupons', headers)
  }

  private createAuthorizationHeader(): HttpHeaders{
    return new HttpHeaders().set(
      'Authorization', 'Bearer' + UserStorageService.getToken()
    )
  }

}
