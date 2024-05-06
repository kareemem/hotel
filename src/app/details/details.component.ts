import { Component, OnInit } from '@angular/core';
import { HotelsService } from '../hotels.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  sessionId:any
  hotelId:any
  productId:any
  tokenId:any
  imgSource:any
  dataSource:any
constructor(private _HotelsService:HotelsService, private _ActivatedRoute:ActivatedRoute){}

ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((params)=>{
      this.sessionId=params.get('sessionId')
      this.hotelId=params.get('hotelId')
      this.productId=params.get('productId')
      this.tokenId=params.get('tokenId')
      this.getDetails()
    })
}
customOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 2
    },
    740: {
      items: 3
    },
    940: {
      items: 4
    }
  },
  nav: true
}
getDetails(){
this._HotelsService.getHotelDetails(this.sessionId,this.hotelId,this.productId,this.tokenId).subscribe({
  next:(response:any)=>{
    console.log(response);
    this.imgSource=response.hotelImages
    this.dataSource=response
  },error:(error)=>{
    console.log(error);

  }
})
}
}
