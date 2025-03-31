import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button'

@Component({
  selector: 'app-display-form',
  imports: [DialogModule, ButtonModule],
  templateUrl: './display-form.component.html',
  styleUrl: './display-form.component.css',
})
export class DisplayFormComponent {
  @Input() isVisible: boolean = false;
  @Output() visibleChange = new EventEmitter<boolean>();

  onHide() {
    this.visibleChange.emit(false);
  }
}
