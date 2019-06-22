import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule, MatButtonModule, MatSelectModule, MatMenuModule, MatDialogModule, MatNativeDateModule } from '@angular/material';
import { MatRadioModule, MatCardModule, MatToolbarModule, MatTabsModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatToolbarModule,
    MatTabsModule,
    MatMenuModule,
    MatDialogModule,
    MatNativeDateModule,
    CarouselModule
  ]
})
export class DesignModule { }
