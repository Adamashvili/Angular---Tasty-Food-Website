import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {
  public productList: any

  constructor() { }

  // foodDetails

  foodDetails = [
    {
      id:1,
      foodName:"Paneer Grilled Sandwich",
      foodDetail:"Pan-fried masala paneer.",
      foodPrice:12,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wzfq7djolqxgdhghebbq",
      foodType: 'On Sale'
    },
    {
      id:2,
      foodName:"Notveggie Supreme",
      foodDetail:"Onion| Green Capsicum|Mushroom |black olives , sweet corn , Red Paprika topped with Cheese",
      foodPrice:17,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/sgbobtbxlojbtdnr2m5k",
      foodType: 'Out Of Order'
    },
    {
      id:3,
      foodName:"Paneer Burger",
      foodDetail:"panner",
      foodPrice:15,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/xbeqlsck3p0kei53to7k",
      foodType: 'On Sale'
    },
    {
      id:4,
      foodName:"Veg Masala ",
      foodDetail:"A homely mix of mashed potato and veggies, seasoned with Indian spices.",
      foodPrice:3,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/l2ng6gtge30sqaafqng7",
      foodType: 'On Sale'
    },
    {
      id:5,
      foodName:"Indulgence Brownie",
      foodDetail:"(Eggless) Indulge in richly decadent chocolate brownie crafted with love & topped with bitter-sweet chocolate.",
      foodPrice:23,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/iqlmbg1hlyc0dspdyzzv",
      foodType: 'On Sale'
    },
    {
      id:6,
      foodName:"Cheesecake Ice Cream",
      foodDetail:"Oreo ice cream",
      foodPrice:30,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wtj8esaeslvlscv8glj6",
      foodType: 'On Sale'
    },
    {
      id:7,
      foodName:"Much Grilled Sandwich",
      foodDetail:"Pan-fried masala paneer.",
      foodPrice:4,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wzfq7djolqxgdhghebbq",
      foodType: 'Out Of Order'
    },
    {
      id:8,
      foodName:"Veggie Supreme",
      foodDetail:"Onion| Green Capsicum|Mushroom |black olives , sweet corn , Red Paprika topped with Cheese",
      foodPrice:12,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/sgbobtbxlojbtdnr2m5k",
      foodType: 'On Sale'
    },
    {
      id:9,
      foodName:"Paneer Burger",
      foodDetail:"panner",
      foodPrice:15,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/xbeqlsck3p0kei53to7k",
      foodType: 'On Sale'
    },
    {
      id:10,
      foodName:"Roll In Naan",
      foodDetail:"A homely mix of mashed potato and veggies, seasoned with Indian spices.",
      foodPrice:10,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/l2ng6gtge30sqaafqng7",
      foodType: 'On Sale'
    },
    {
      id:11,
      foodName:"Veggie Supreme",
      foodDetail:"Onion| Green Capsicum|Mushroom |black olives , sweet corn , Red Paprika topped with Cheese",
      foodPrice:12,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/sgbobtbxlojbtdnr2m5k",
      foodType: 'Out Of Order'
    },
    {
      id:12,
      foodName:"Paneer Burger Max",
      foodDetail:"Tasty panner",
      foodPrice:15,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/xbeqlsck3p0kei53to7k",
      foodType: 'On Sale'
    },
    
    
    
  ]

  
}
