import { Component, Input, OnInit } from '@angular/core';
import { OffersService } from 'src/app/services/offers.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {

  @Input() id:string | undefined;
  @Input() name:string | undefined;

  constructor() { }

  ngOnInit(): void {



  }


}
