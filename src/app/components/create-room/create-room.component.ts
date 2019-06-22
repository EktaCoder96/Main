import { Component, OnInit } from '@angular/core';

export interface Room {
  value: string;
  viewValue: string;
}
export interface Occupy {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent implements OnInit {

  rooms: Room[] = [
    {value: 'Single Room-0', viewValue: 'Single Room'},
    {value: 'Double Room-1', viewValue: 'Double Room'},

  ];
  occupies: Occupy[] = [
    {value: '1', viewValue: ''},
    {value: '2', viewValue: ''},
    {value: '3', viewValue: ''}
  ];

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    // event handler

  }
}
