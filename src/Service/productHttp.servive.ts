import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Product } from '../model/products';

@Injectable({
    providedIn: "root"
})


export class productHttp{

    constructor(private http: HttpClient){}

    createProduct(products: {pName: string, desc: string, price: string}){
    console.log(products)
    const head = new HttpHeaders({'MyHeader': 'ADAMASHVILI'})
    this.http.post<{name: string}>('https://adamashvili-project-default-rtdb.firebaseio.com/Products.json', products)
    .subscribe((res) => {
      console.log(res)
    });
   
    }

    fetchProduct(){
        return this.http.get<{[key:string]: Product}>('https://adamashvili-project-default-rtdb.firebaseio.com/Products.json')
        .pipe(map((res) => {
          const products = [];
          for (const key in res){
            if(res.hasOwnProperty(key)){
              products.push({...res[key], id:key})
            }
          }
          return products
        }))
          
        }
    

    deleteProduct(id: string){
        this.http.delete('https://adamashvili-project-default-rtdb.firebaseio.com/Products/'+id+'.json')
    .subscribe();
    }

    deleteAllProducts(){
        this.http.delete('https://adamashvili-project-default-rtdb.firebaseio.com/Products/.json')
    .subscribe();
    }

    updateProduct(id: string, value: Product) {
      this.http.put('https://adamashvili-project-default-rtdb.firebaseio.com/Products/'+id+'.json', value)
      .subscribe();
    }

}