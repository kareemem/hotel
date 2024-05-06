import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  constructor(private _HttpClient:HttpClient) { }
getHotels(model:any){
  return  this._HttpClient.post(' https://travelnext.works/api/hotel-api-v6/hotel_search',JSON.stringify(model))
}
getHotelDetails(sessionId:any,hotelId:any,productId:any,tokenId:any){
  return this._HttpClient.get(`https://travelnext.works/api/hotel-api-v6/hotelDetails?sessionId=${sessionId}&hotelId=${hotelId}&productId=${productId}&tokenId=${tokenId}`)
}
}
