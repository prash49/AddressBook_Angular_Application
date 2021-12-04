import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAddressComponent } from './component/add-address/add-address.component';
import { DashBoardComponent } from './component/dash-board/dash-board.component';


const routes: Routes = [
  {path: '' , component: DashBoardComponent},
 {path: 'address' , component: AddAddressComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
