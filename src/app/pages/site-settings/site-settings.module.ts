import { NgModule } from '@angular/core';
import { SiteSettingsComponent } from './site-settings.component';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbInputModule,
  NbListModule,
  NbIconModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
  NbDialogModule,
} from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { FormsModule as ngFormsModule } from '@angular/forms';
import { DataService } from '../data.service';

@NgModule({
  imports: [
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    NbSelectModule,
    NbIconModule,
    ngFormsModule,
    NbListModule,
    NbIconModule,
    NbDialogModule,
  ],
  declarations: [
    SiteSettingsComponent,
  ],
  providers: [
    DataService,
  ],
})
export class SiteSettingsModule { }
