import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { OrderDetailsService } from 'src/app/Services/order-details.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent  implements OnInit{



  constructor(private service: OrderDetailsService, private cartService: CartService) {}

  foodData: any;

  ngOnInit(): void {
    this.foodData = this.service.foodDetails;

    this.foodData.forEach((a:any) => {
      Object.assign(a,{quantity:1, total:a.price});
    })
  }

  addtoCart(item:any) {
    this.cartService.addToCartss(item)
    console.log(item)
  }

  searchText: string = "";

  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
    // console.log(this.searchText)
    

  }

  getToTalFoods() {
    return this.service.foodDetails.length;
    
  }

  getToTalSaleFoods() {
    return this.service.foodDetails.filter(type => type.foodType === 'Sale').length;
   
  }

  getToTaloutofOrderFoods() {
    return this.service.foodDetails.filter(type => type.foodType === 'NotAvailable').length;
  }

  foodCountRadio: string = "All";

  onFilterRadioChanged(data: string) {
    this.foodCountRadio = data;
    console.log(this.foodCountRadio)

  }



}
