import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { HotelsService } from '../hotels.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  page:any=1
  total:any
  city:string=''
  dataSource:any
  show:boolean=false
  sessionId:any
  formSearch:FormGroup=new FormGroup({
  city_name:new FormControl(null,[Validators.required]),
  country_name:new FormControl(null,[Validators.required]),
  checkin:new FormControl(null,[Validators.required]),
  checkout:new FormControl(null,[Validators.required]),
  room_no:new FormControl(null,[Validators.required]),
  adult:new FormControl(null,[Validators.required]),
  child:new FormControl(null,[Validators.required]),
  child_age:new FormArray([new FormControl()],[Validators.required]),
  requiredCurrency:new FormControl(null,[Validators.required]),
})
constructor(private _HotelsService:HotelsService){}
ngOnInit(): void {

}
get formNum(){
  return this.formSearch.get('child_age') as FormArray
}
addAgeChild(event:any){
  this.formNum.push(new FormControl())
  event.target?.classList.add('d-none')
}

searchHotel(form:FormGroup){

  console.log(form.value);

  const model=    {
    user_id: "emadkareem_testAPI",
    user_password: "emadkareemTest@2024",
    access: "Test",
    ip_address: "197.120.98.187",
    checkin: form.value.checkin,
    checkout: form.value.checkout,
    city_name: form.value.city_name,
    country_name: form.value.country_name,
    occupancy: [
      {
        room_no: form.value.room_no,
        adult: form.value.adult,
        child: form.value.child,
        child_age: form.value.child_age
      }
    ],
    requiredCurrency: form.value.requiredCurrency
}
this._HotelsService.getHotels(model).subscribe({
  next:(response:any)=>{
    if(response.status.errors){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: response.status.errors[0].errorMessage,
      });
    }
    this.formSearch.reset()
    console.log(response);
    this.sessionId=response.status.sessionId
    this.dataSource=response.itineraries
    console.log(this.dataSource);
    this.total=response.status.totalResults
    this.city=response.itineraries[0].city
    this.show=true
  },
  error:(error)=>{
    console.log(error);

    this.formSearch.reset()

  }
})
}

changePage(event:any){
  this.page=event
}

}
