import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { SiteSettingsModule } from './site-settings/site-settings.module';
import { AboutPageModule } from './about-page/about-page.module';
import { HomePageModule } from './home-page/home-page.module';

import { DataService } from './data.service';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    SiteSettingsModule,
    AboutPageModule,
    HomePageModule,
    MiscellaneousModule,
  ],
  declarations: [
    PagesComponent,
  ],
  providers: [
    DataService,
  ],
})
export class PagesModule {
}
