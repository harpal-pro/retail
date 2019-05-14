import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { CreateShopComponent } from './create-shop/create-shop.component';
import { ListShopsComponent } from './list-shops/list-shops.component';
import { SearchShopComponent } from './search-shop/search-shop.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [AppComponent, HomeComponent, CreateShopComponent, ListShopsComponent, SearchShopComponent ,  LoginComponent],
  imports: [
    BrowserModule, AppRoutingModule, HttpClientModule ,CommonModule,FormsModule ,ReactiveFormsModule
   
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}