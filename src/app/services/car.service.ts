import { Injectable } from '@angular/core';

@Injectable()
export class CarService {

  private cars:Car[]=[
      {
        mark: "TOYOTA",
        model: "2009",
        price: 10000,
        color: "Blue",
        type: "Peta"
      },
      {
        mark: "SUZUKI",
        model: "2010",
        price: 8000,
        color: "Blue",
        type: "Subaru Domingo"
      },
      {
        mark: "NISSAN",
        model: "2009",
        price: 10000,
        color: "Blue",
        type: "Minibus"
      },
      {
        mark: "NISSAN",
        model: "2011",
        price: 25000,
        color: "Blue",
        type: "Vagoneta"
      },
      {
        mark: "NISSAN",
        model: "2012",
        price: 28000,
        color: "Blue",
        type: "Camioneta"
      },
      {
        mark: "Umbro",
        model: "2015",
        price: 17500,
        color: "Blue",
        type: "Vagoneta"
      },
      {
        mark: "UMBRO",
        model: "2016",
        price: 19500,
        color: "Blue",
        type: "Camioneta"
      },
      {
        mark: "TOYOTA",
        model: "2017",
        price: 35000,
        color: "Red",
        type: "Camioneta"
      },
      {
        mark: "TOYOTA",
        model: "2018",
        price: 30000,
        color: "White",
        type: "Vagoneta"
      },
      {
        mark: "TOYOTA",
        model: "2018",
        price: 10000,
        color: "Blue",
        type: "Peta"
      },
      {
        mark: "SUZUKI",
        model: "2018",
        price: 8000,
        color: "Blue",
        type: "Subaru Domingo"
      },
      {
        mark: "NISSAN",
        model: "2018",
        price: 10000,
        color: "Blue",
        type: "Minibus"
      },
      {
        mark: "NISSAN",
        model: "2018",
        price: 25000,
        color: "Blue",
        type: "Vagoneta"
      },
      {
        mark: "NISSAN",
        model: "2018",
        price: 28000,
        color: "Blue",
        type: "Camioneta"
      },
      {
        mark: "Umbro",
        model: "2018",
        price: 17500,
        color: "Blue",
        type: "Vagoneta"
      },
      {
        mark: "UMBRO",
        model: "2018",
        price: 19500,
        color: "Blue",
        type: "Camioneta"
      },
      {
        mark: "TOYOTA",
        model: "2018",
        price: 35000,
        color: "Red",
        type: "Camioneta"
      },
      {
        mark: "TOYOTA",
        model: "2018",
        price: 30000,
        color: "White",
        type: "Vagoneta"
      }
    ];

    constructor() {
      console.log("service already...");
    }

    getCars():Car[]{
      return this.cars;
    }

    getCar(idx:string){
      return this.cars[idx];
    }

    searchCars(data:string){

      let carsArr:Car[]=[];
      data=data.toLowerCase();
      for(let car of this.cars){
        let mark=car.mark.toLowerCase();
        let model=car.model.toLowerCase();
        let color=car.color.toLowerCase();
        let type=car.type.toLowerCase();

        if(mark.indexOf(data)>=0 || model.indexOf(data)>=0 || color.indexOf(data)>=0 || type.indexOf(data)>=0){
          carsArr.push(car);
        }
      }
      return carsArr;
    }

}

export interface Car{
  mark: string;
  model: string;
  price: number;
  color: string;
  type: string;
}
