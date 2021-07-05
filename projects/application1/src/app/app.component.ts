import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  dispTableHead=["Name","Age","Address","Phone","Gender","Email"];
  link="/assets/data.json"
  // ["Name","Age","Address","Phone","Gender","Email"]
}
