import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgxPaginationModule } from 'ngx-Pagination';
import { OrderModule } from 'ngx-order-pipe';

import { DashboardComponent } from './maincontent/dashboard/dashboard.component';
import { HowitworksComponent } from './maincontent/howitworks/howitworks.component';
import { UserdetailsComponent } from './maincontent/userdetails/userdetails.component';
import { AdduserComponent } from './maincontent/adduser/adduser.component';

import { HeaderComponent } from './header/header.component';
import { LeftsidemenuComponent } from './leftsidemenu/leftsidemenu.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HowitworksComponent,
    UserdetailsComponent,
    HeaderComponent,
    LeftsidemenuComponent,
    AdduserComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    NgxPaginationModule,
    OrderModule,
    RouterModule.forRoot([
      {path:"", component: DashboardComponent},
      {path:"maincontent/adduser", component: AdduserComponent},
      {path:"maincontent/howitworks", component: HowitworksComponent},
      {path:"maincontent/userdetails", component: UserdetailsComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
