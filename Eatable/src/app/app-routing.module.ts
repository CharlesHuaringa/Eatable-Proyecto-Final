import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { HistoryComponent } from './pages/history/history.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { CartComponent } from './pages/cart/cart.component';
import { FoodComponent } from './components/food/food.component';
import { NoAuthGuard } from './guards/no-auth.guard';
import { CheckoutComponent } from './pages/checkout/checkout.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
    
  },
  {
    path: 'home/:category',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'home/:category/:food',
    component: FoodComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'signup',
    component: SignupComponent,
    
  },
  {
    path: 'login',
    component: LoginComponent,
    
  },
  {
    path: 'profile',
    component: ProfileComponent,
    
  },
  {
    path: 'profile/edit',
    component: EditProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'history',
    component: HistoryComponent,
    
  },
  {
    path: 'cart',
    component: CartComponent,
    
  },
  {
    path: 'cart/checkout',
    component: CheckoutComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
