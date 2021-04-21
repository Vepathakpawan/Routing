import { Component, NgModule } from '@angular/core';
import{ RouterModule,Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { InfoComponent } from './info/info.component';
import{ UserdetailsComponent } from './userdetails/userdetails.component';
import { HomeComponent} from './home/home.component';
const routes:Routes =[
  {
    path:"home",
    component:HomeComponent
  },
{
  path:"user",
  component: UserComponent
},
{
  path:"userdetails",
  component: UserdetailsComponent
},
{
  path:"info",
  component: InfoComponent
},

];




@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes)],
  exports:[ RouterModule]
})
export class AppRoutingModule { }
