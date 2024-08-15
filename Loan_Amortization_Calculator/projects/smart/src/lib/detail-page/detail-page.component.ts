import { Component } from '@angular/core';
import { DataFacade } from '../../state/data.facade';

@Component({
  selector: 'lib-detail-page',
  standalone: false,
  templateUrl: './detail-page.component.html',
  styleUrl: './detail-page.component.css'
})
export class DetailPageComponent {  
  constructor(public facade:DataFacade){}
}
