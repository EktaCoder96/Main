import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';


const states = [
  { id: 1, name: 'Delhi' },
  { id: 2, name: 'Haryana' },
  { id: 3, name: 'Punjab' }
];

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  statesList = states;
  // profileForm = new FormGroup({
  //   firstname: new FormControl(''),
  //   lastname: new FormControl(''),
  //   address: new FormGroup({
  //     state: new FormControl(''),
  //     city: new FormControl('')
  //   })

  // });

  constructor(private fb: FormBuilder) { }
  customform = this.fb.group(
    {
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      address: this.fb.group({
        state: [''],
        city: ['']
      })
    }
  );


  ngOnInit() {
  }
  onSubmit() {
    // event handler

  }
}
