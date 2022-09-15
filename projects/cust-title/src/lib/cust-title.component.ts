import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ui-cust-title',
  template: `
    <h1>
      {{title}}
    </h1>
  `,
  styles: [
    'h1 { font-weight: bold; color:#04048f; }'
  ]
})
export class CustTitleComponent implements OnInit {

  @Input() title: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
