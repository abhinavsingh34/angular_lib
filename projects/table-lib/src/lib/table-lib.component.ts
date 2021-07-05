import {
  Component,
  OnInit,
  Input,
  TemplateRef,
  ContentChild
} from "@angular/core";


@Component({
  selector: 'lib-tableLib',
  templateUrl: './table-lib.component.html',
  styles: [
  ]
})
export class TableLibComponent implements OnInit {
  @Input()
  caption: string | undefined;

  @Input()
  columns: { title: string; key: string }[] = [];

  @Input()
  values: any[] = [];

  @Input()
  footerValues: any[] = [];

  @ContentChild("caption", { static: false })
  captionTemplate: TemplateRef<any> | undefined;

  @ContentChild("header", { static: false })
  headerTemplate: TemplateRef<any> | undefined;

  @ContentChild("body", { static: false })
  bodyTemplate: TemplateRef<any> | undefined;

  @ContentChild("footer", { static: false })
  footerTemplate: TemplateRef<any> | undefined;

  constructor() {}

  ngOnInit() {}
}
