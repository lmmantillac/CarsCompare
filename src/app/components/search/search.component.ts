import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { CarService, Car } from '../../services/car.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  mCars:Car[]=[];
  mDescription:string = "";
  decidedCompareCars:boolean=false;
  mCarsCompare:Car[]=[];
  mCheap:boolean=false;
  mExpensive:boolean=false;

  mCarCompare1:Car={
    mark: "",
    model: "",
    price: 0,
    color: "",
    type: ""
  };
  mCarCompare2:Car={
    mark: "",
    model: "",
    price: 0,
    color: "",
    type: ""
  };

  mCount:number=0;

  constructor( private activatedRoute:ActivatedRoute, private _carService:CarService ) {
     this.activatedRoute.params.subscribe( params =>{
       this.mCars=this._carService.getCars();
       console.log(this.mCars);
    });
  }

  searchCars(){
    this.activatedRoute.params.subscribe( params =>{
      this.mCars=this._carService.searchCars(this.mDescription);
      console.log(this.mCars);
    });
  }

  selectCar( selectedPosition: number ){
    if(this.mCarsCompare.length<=2){
      this.decidedCompareCars=false;
      this.activatedRoute.params.subscribe( params =>{
      this.mCarsCompare[this.mCount]=this._carService.getCar(selectedPosition);
      this.mCount=this.mCount+1;
      if(this.mCount==2){
        this.mCount=0;
        this.decidedCompareCars=true;
        this.mCarCompare1=this.mCarsCompare[0];
        this.mCarCompare2=this.mCarsCompare[1];
        this.mCarsCompare=[];
        if(this.mCarCompare1.price>this.mCarCompare2.price){
          this.mCheap=true;
          this.mExpensive=false;
        }
        else{
          this.mCheap=false;
          this.mExpensive=true;
        }
      }
      console.log(this.mCarsCompare);
      });
    }
  }

  ngOnInit() {
  }

}
