import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {IconPageComponent} from './icon-page/icon-page.component';
import {HomePageComponent} from './home-page/home-page.component';
import {MainLayoutComponent} from './shared/components/main-layout/main-layout.component';
import {CartComponent} from './cart/cart.component';
import {AboutPageComponent} from './about-page/about-page.component';
import {HowToBuyPageComponent} from './how-to-buy-page/how-to-buy-page.component';
import {GuaranteePageComponent} from './guarantee-page/guarantee-page.component';
import {ContactsPageComponent} from './contacts-page/contacts-page.component';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: '', component: HomePageComponent},
      {path: 'icon/:id', component: IconPageComponent},
      {path: 'cart', component: CartComponent},
      {path: 'about', component: AboutPageComponent},
      {path: 'howToBuy', component: HowToBuyPageComponent },
      {path: 'guarantee', component: GuaranteePageComponent },
      {path: 'contacts', component: ContactsPageComponent }
    ]
  },
  {
    path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
