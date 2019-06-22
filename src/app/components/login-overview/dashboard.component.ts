import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OwlOptions } from 'ngx-owl-carousel-o';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-dialog2',
  templateUrl: 'login.component.html',
})
export class LoginDialogComponent {
  addressForm: any;
  constructor(private fb: FormBuilder, private http: HttpClient,
    // tslint:disable-next-line: align
    public dialogRef: MatDialogRef<LoginDialogComponent>,
    // tslint:disable-next-line: align
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.addressForm = this.fb.group({
      email: [null, Validators.email],
      password: [null, Validators.required]
    });

  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  GetHttpHeaders(): HttpHeaders {
    const headers = new HttpHeaders().set('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
    return headers;
  }
  onSubmit() {
    // let url = 'https://localhost:5001/home/login?user=ekta@gmail.com';
    // let headerss = this.GetHttpHeaders();
    // let result = this.http.get(url, { headers: headerss }).subscribe(data => console.log(data));

    const url2 = 'https://localhost:5001/home/register';
    const user = { email: 'alok@gmail.com', password: '123123' };
    const result2 = this.http.post(url2, user, { headers: this.GetHttpHeaders() }).subscribe(data => console.log(data));
    console.log('login');
  }

}

@Component({
  selector: 'app-login',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  users: any;
  slidesStore: any;
  ngOnInit(): void {
    this.slidesStore = [
      { id: 1, src: './assets/img1.jpg', title: 'image1' },
      { id: 2, src: './assets/img2.jpg', title: 'image2' },
      { id: 3, src: './assets/img3.jpg', title: 'image3' },
    ];
    this.http.get('https://localhost:5001/home/users').subscribe(data => this.users = data);
  }

  constructor(public dialog: MatDialog, private http: HttpClient) {
  }

  openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  openRegDialog(): void {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(RegisterDialogComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}



@Component({
  selector: 'app-registerdg',
  templateUrl: 'registerdialog.component.html',
})
export class RegisterDialogComponent {
  addressForm: any;
  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<RegisterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.addressForm = this.fb.group({
      email: [null, Validators.email],
      username: [null, Validators.required],
      phone: [null, Validators.required],
      password: [null, Validators.required],
      address: [null, Validators.required]
    });

  }

  register() {
    console.log('registered');
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  onSubmit(){
    
  }

}
