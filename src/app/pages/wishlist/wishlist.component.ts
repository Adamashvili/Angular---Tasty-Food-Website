import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { productHttp } from 'src/Service/productHttp.servive';
import { LoadingService } from 'src/app/loading.service';
import { Product } from 'src/model/products';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit{
  allProducts: Product[] = [];
  editMode: boolean = false;
  currentProductId: string = "";
  @ViewChild('productsForm') form!: NgForm;
  constructor(private http: HttpClient, private productService: productHttp,
    public loading: LoadingService) {}

  ngOnInit(): void {
    this.fetchProducts()
  }

  onProductFetch(){
    this.fetchProducts()
  }

  onProductCreate(products: {pName: string, desc: string, price: string}) {
    if (!this.editMode)
    this.productService.createProduct(products)
    else
    this.productService.updateProduct(this.currentProductId, products);
    this.onProductFetch()
  }

  private fetchProducts(){
   
    this.productService.fetchProduct().subscribe((products)=> {
      this.allProducts = products;
    
      this.editMode = false

    })
    
  }

  onDeleteProduct(id: string) {
    this.productService.deleteProduct(id)
  }

  onDeleteAllProduct() {
    this.productService.deleteAllProducts()
  }

  onEdiTProduct(id: string) {
    this.currentProductId = id;
    // get product
    let currentProduct = this.allProducts.find((p)=> {return p.id === id})

    // poulate the form  with the product details
    this.form.setValue({
      pName: currentProduct!.pName,
      desc: currentProduct!.desc,
      price: currentProduct!.price
    })

    //cchange the vutton value to update product
    this.editMode = true
   
  }

}
