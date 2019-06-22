import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TryComponent } from './try/try.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './modules/login/login.module';
import { DesignModule } from './modules/design/design.module';
import { LoginDialogComponent, RegisterDialogComponent, DashboardComponent } from './components/login-overview/dashboard.component';

import { RestaurantComponent } from './restaurant/restaurant.component';
import { ServiceesComponent } from './servicees/servicees.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { CreateHotelComponent } from './components/create-hotel/create-hotel.component';
import { CreateRoomComponent } from './components/create-room/create-room.component';


@NgModule({
  declarations: [
    AppComponent,
    TryComponent,
    DashboardComponent,
    ServiceesComponent,
    RestaurantComponent,
    AdminloginComponent,
    HomeComponent,
    CreateUserComponent,
    CreateHotelComponent,
    CreateRoomComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LoginModule,
    DesignModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [LoginDialogComponent, RegisterDialogComponent]
})
export class AppModule { }

