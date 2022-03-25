import { Component, Input } from '@angular/core';
@Component({
  selector: 'my-component',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.scss'],
})
export class MyComponent {
  @Input() name: string;
}
