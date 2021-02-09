import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { SiteSettingsComponent } from './site-settings/site-settings.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'site-settings',
      component: SiteSettingsComponent,
    },
    {
      path: 'about-page',
      component: AboutPageComponent,
    },
    {
      path: 'home-page',
      component: HomePageComponent,
    },
    {
      path: '',
      redirectTo: 'site-settings',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
