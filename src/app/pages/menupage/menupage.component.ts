import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/Services/order-details.service';



@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit{
  constructor(private param: ActivatedRoute, private service: OrderDetailsService) {}
  getMenyId:any;
  menuData:any;

  ngOnInit(): void {
    this.getMenyId = this.param.snapshot.paramMap.get('id');
    if(this.getMenyId) {
      this.menuData = this.service.foodDetails.filter((value)=> {
        if(value.id == this.getMenyId) {
          return value.id == this.getMenyId
        }
      })

    }
  }

}
