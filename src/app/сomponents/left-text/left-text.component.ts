import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-left-text',
  templateUrl: './left-text.component.html',
  styleUrls: ['./left-text.component.scss']
})

export class LeftTextComponent {
  @Input() text: string = '';
  @Input() left: number = 0;
  @Input() top: number = 0;
}
