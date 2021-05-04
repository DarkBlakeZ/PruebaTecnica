import { Injectable } from '@angular/core';
import * as data from '../../assets/data/ofertas.json';

@Injectable({
  providedIn: 'root'
})
export class OffersService {
  info: any={};
  offers: any[] = [];
  cargada= false;

  constructor() { 
    console.log('Servicio corriendo')
    this.info = data.default
    console.log(this.info)
  }


  getData(){
    return this.info
  }

}
