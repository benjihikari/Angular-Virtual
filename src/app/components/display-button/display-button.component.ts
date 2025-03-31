import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DisplayFormComponent } from '../display-form/display-form.component';
import { VirtualService } from '../virtual.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-display-button',
  imports: [DisplayFormComponent, ButtonModule],
  templateUrl: './display-button.component.html',
  styleUrl: './display-button.component.css'
})
export class DisplayButtonComponent {
  visible: boolean = false;

  showForm() {
    this.visible = true;
  }

  closeForm(newVisible: boolean) {
    this.visible = newVisible;
  }
}
