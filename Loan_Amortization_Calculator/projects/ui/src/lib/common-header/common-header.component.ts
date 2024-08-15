import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-common-header',
  standalone: false,

  templateUrl: './common-header.component.html',
  styleUrl: './common-header.component.css'
})
export class CommonHeaderComponent {
constructor(public router:Router){}
}
