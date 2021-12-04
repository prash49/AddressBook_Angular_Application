import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAddressComponent } from './component/add-address/add-address.component';
import { DashBoardComponent } from './component/dash-board/dash-board.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule,MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OrderModule, } from 'ngx-order-pipe';


@NgModule({
  declarations: [
    AppComponent,
    AddAddressComponent,
    DashBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatSelectModule,
    HttpClientModule,
   FormsModule, ReactiveFormsModule, MatDialogModule,
   OrderModule,

   

  ],
  providers: [ {
    provide: MatDialogRef,
    useValue: []
  },
  {
    provide: MAT_DIALOG_DATA,
    useValue: []
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
