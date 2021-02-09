import { Component, OnInit, TemplateRef } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { DataService } from '../data.service';

@Component({
  selector: 'ngx-site-settings',
  styleUrls: ['./site-settings.component.scss'],
  templateUrl: './site-settings.component.html',
})
export class SiteSettingsComponent implements OnInit {

  siteData: any;
  menu: any;
  dialog: any;

  constructor(private dataService: DataService, private dialogService: NbDialogService) {}

  ngOnInit() {
    this.dataService.fetchSettings().subscribe((data) => {
      this.siteData = this.csvToJson2d(data);
    });
    this.dataService.fetchMenu().subscribe((data) => {
      this.menu = this.csvToJson(data);
    });
  }

  // Uses first column as keys
  csvToJson2d(csv) {
    const lines = csv.split('\r\n');
    const result = {};

    for (let i = 1; i < lines.length; i++) {
      const currentline = lines[i]?.split('\t');
      if (currentline[0]) {
        result[currentline[0]] = currentline[1];
      }
    }
    return result;
  }

  // Returns array
  csvToJson(csv) {
    const lines = csv.split('\r\n');
    const headers = lines[0]?.split('\t');
    const result = [];

    for (let i = 1; i < lines.length; i++) {
      const currentline = lines[i]?.split('\t');
      const obj = {};

      for (let j = 0; j < currentline.length; j++) {
        obj[headers[j]] = currentline[j];
      }

      result.push(obj);
    }
    return result;
  }

  addMenu() {
    const item = {
      name: 'New Page',
      link: '/new-page',
    };
    this.menu.push(item);
  }

  editMenu(dialog: TemplateRef<any>, menuItem: any) {
    this.dialog = this.dialogService.open(
      dialog,
      { context: 'this is some additional data passed to dialog' });
  }

  deleteMenu(index: number) {
    this.menu.splice(index, 1);
    this.dialog.close();
  }

  reorderMenu(index: number, isUpward: Boolean) {
    if ((isUpward && index > 0) || (!isUpward && index < this.menu.length - 1)) {
      this.menu.splice(isUpward ? index - 1 : index + 2, 0, this.menu[index]);
      this.menu.splice(isUpward ? index + 1 : index, 1);
    }
  }
}
