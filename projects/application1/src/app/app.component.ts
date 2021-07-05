import { Component, OnInit   } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  dispTableHead=["Name","Age","Address","Phone","Gender","Email"];
  link="/assets/data.json"
  // ["Name","Age","Address","Phone","Gender","Email"]


  columns = [
    { title: "ID", key: "id" },
    { title: "Name", key: "name" },
    { title: "Age", key: "age" },
    { title: "Sex", key: "sex" }
  ];

  values = [
    { id: 1, name: "Andrew", age: "26", sex: "M" },
    { id: 2, name: "David", age: "28", sex: "M" },
    { id: 3, name: "Steve", age: "30", sex: "M" },
    { id: 4, name: "Tony", age: "21", sex: "M" }
  ];

  footerValues = [{ copyrightDetails: "© 2019.  All rights reserved" }];

  constructor() { }

  ngOnInit(): void {
  }

}
