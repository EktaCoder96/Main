import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  myform: any;
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  constructor(private fb: FormBuilder) {
    // this.myform = this.fb.group(
      

    // )
  }

  ngOnInit() {

  }

}
