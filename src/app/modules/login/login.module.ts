import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginDialogComponent, RegisterDialogComponent } from 'src/app/components/login-overview/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DesignModule } from '../design/design.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [LoginDialogComponent, RegisterDialogComponent ],
  imports: [
    CommonModule,
    FormsModule,
    DesignModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class LoginModule { }
