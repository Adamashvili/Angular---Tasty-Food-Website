import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { FooterComponent } from './sharePages/footer/footer.component';
import { NavbarComponent } from './sharePages/navbar/navbar.component';
import { MenupageComponent } from './pages/menupage/menupage.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CanDeactivateService } from './candeactivate.service.guard';
import { HomeModule } from './pages/home/home.module';
import { AboutModule } from './pages/about/about.module';
import { ContactModule } from './pages/contact/contact.module';
import { MenuModule } from './pages/menu/menu.module';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { InterceptorService } from './interceptor.service';
import { CartComponent } from './pages/cart/cart.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    PagenotfoundComponent,
    LoginComponent,
    MenuComponent,
    MenupageComponent,
    HomeComponent,
    WishlistComponent,
    CartComponent,
    SearchComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    },
    CanDeactivateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
