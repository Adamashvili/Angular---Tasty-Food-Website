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

}
