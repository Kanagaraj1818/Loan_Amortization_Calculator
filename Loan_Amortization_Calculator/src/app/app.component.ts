import { Component, OnInit } from '@angular/core';
import { DataFacade } from '../../projects/smart/src/state/data.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'Loan_Amortization_Calculator';
  constructor(private facade:DataFacade){}
  ngOnInit(): void {
    this.facade.loadAll()
  }
}
