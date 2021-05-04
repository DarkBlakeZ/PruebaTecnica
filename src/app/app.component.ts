import { Component, OnInit } from '@angular/core';
import { OffersService } from './services/offers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pruebaTecnica';
  public listOffers:Array<any> = [];
  public characteristics:Array<any> = [];
  public precios:Array<any> = [];
  public id:string | undefined
  public name: string | undefined

  constructor(private _OffersService:OffersService){

  }

  ngOnInit():void{

    this.cargarData()

  }


  public cargarData(){
    this._OffersService.getData().forEach((element: any) => {
      this.listOffers.push(element)
    });
  }

  public selectOffer(id: string){
    if(this.id!==id){
      this.name=''
      this.characteristics=[]
      this.precios=[]
    }
    this.id = id
    
    this.name = this.listOffers.find(x=> x.id === id).versions[0].name
    this.listOffers.find(x=> x.id === id).versions[0].characteristics.forEach((element: any) => {
      this.characteristics.push(element)
    });
    this.listOffers.find(x=> x.id === id).versions[0].productOfferingPrices.forEach((element: any) => {
      this.precios.push(element)
    });
  }







}
