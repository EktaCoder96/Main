import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HotelService } from 'src/app/services/hotel.service';
import { State, City, Chain, Brand, Hotel } from 'src/app/models/models';
import { Route, Router } from '@angular/router';
const states = [
  { id: 1, name: 'Delhi' },
  { id: 2, name: 'Haryana' },
  { id: 3, name: 'Punjab' }
];
const brands = [
  { name: 'Radisson', viewValue: 'Single Room' },
  { name: 'Westin', viewValue: 'Double Room' },
  { name: 'Shangrila', viewValue: 'Family Room' }
];

export interface Hbrand {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-hotel',
  templateUrl: './create-hotel.component.html',
  styleUrls: ['./create-hotel.component.css']
})
export class CreateHotelComponent implements OnInit {
  statesList: any[];
  cityList: any[];
  chainList: any[];
  brandList: any[];
  roomList = [1, 2, 3, 4, 5];
  hotel = new Hotel();
  customform: any;
  constructor(private fb: FormBuilder, private hotelService: HotelService) { }

  ngOnInit() {
    //#region form
    this.customform = this.fb.group(
      {
        name: ['', Validators.required],
        chain: ['', Validators.required],
        state: ['', Validators.required],
        city: ['', Validators.required],
        brand: ['', Validators.required],
        rooms: ['']
      }
    );
    //#endregion

    //#region master data
    this.hotelService.getStates().subscribe(data => {
      this.statesList = data.map(p => {
        return {
          id: p.id,
          name: p.name
        } as State;
      });
    });

    this.hotelService.getChain().subscribe(data => {
      this.chainList = data.map(p => {
        return {
          id: p.id,
          name: p.name
        } as Chain;
      });
    });
    //#endregion
  }

  //#region onselect dropdowns
  onStateSelect(id: number) {
    this.hotelService.getCities(id).subscribe(data => {
      this.cityList = data.map(p => {
        return {
          id: p.id,
          name: p.name
        } as City;
      });
    });
  }

  onChainSelect(id: number) {
    this.hotelService.getBrand(id).subscribe(data => {
      this.brandList = data.map(p => {
        return {
          id: p.id,
          name: p.name
        } as Brand;
      });
    });
  }
  //#endregion

  onSubmit() {
    const payload = {
      name: this.customform.get('name').value,
      hotelChainId: this.customform.get('chain').value,
      cityId: this.customform.get('city').value,
      hotelBrandId: this.customform.get('brand').value,
      stateId: this.customform.get('state').value,
      rooms: this.customform.get('rooms').value
    };
    this.hotelService.saveHotel(payload).subscribe(data => {
      console.log(data);
    });

  }

}
