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

  ngOnInit() {
  }

}
