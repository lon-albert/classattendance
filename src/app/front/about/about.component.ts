import { Component } from '@angular/core';
import {ToastComponent} from '../../shared/toast/toast.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  constructor(private toast: ToastComponent) { }

}
