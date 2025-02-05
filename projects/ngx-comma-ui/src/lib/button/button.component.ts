import { Component, input, output } from '@angular/core';

@Component({
  selector: 'cma-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  btnType = input<string>('button');
  disabled = input<boolean>(false);

  click = output<void>();

  onClick(): void {
    if(this.disabled()) return;
    this.click.emit();
  }
}
