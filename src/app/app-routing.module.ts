import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenupageComponent } from './pages/menupage/menupage.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { CanDeactivateService } from './candeactivate.service.guard';
import { WishlistComponent } from './pages/wishlist/wishlist.component';


const routes: Routes = [
  {path:'', canDeactivate: [CanDeactivateService], component:LoginComponent},
  {path:'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)},
  {path:'menu', loadChildren: () => import('./pages/menu/menu.module').then(m => m.MenuModule)},
  {path: 'menu/:id', loadChildren: () => import('./pages/menupage/menupage.module').then(m => m.MenuPageModule)},
  {path: 'about', loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule)},
  {path: 'contact', loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule)},
  {path: 'wishlist', component:WishlistComponent },
  {path: 'cart', loadChildren: () => import('./pages/cart/cart.module').then(m => m.CartModule)},
  {path: '**', component:PagenotfoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
