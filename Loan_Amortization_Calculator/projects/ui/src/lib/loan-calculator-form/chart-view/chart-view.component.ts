import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { AmortizationScheduleEntry } from '../../tabularViewInterface';
Chart.register(...registerables)

@Component({
  selector: 'lib-chart-view',
  standalone: false,
  templateUrl: './chart-view.component.html',
  styleUrl: './chart-view.component.css'
})
export class ChartViewComponent implements OnInit, AfterViewInit {
  @Input() data!:AmortizationScheduleEntry[];
  months!:number[];
  balance!: number[];
  interest!:number[];
  payment!: number[];
  
ngOnInit(): void {
  this.months = this.data.map(data => data.month)
  this.balance = this.data.map(data => data.balance)
  this.interest = this.data.map(data => data.interest)
  let inputArray = this.data.map(data => data.payment)
  this.payment = inputArray.reduce((acc, current) => {
    const sum = acc.length > 0 ? acc[acc.length - 1] + current : current;
    acc.push(sum);
    return acc;
  }, [] as number[]);
}
canvas:any;
ctx:any;
@ViewChild('mychart') mychart:any;
ngAfterViewInit(): void {
  this.canvas = this.mychart.nativeElement;
  this.ctx = this.canvas.getContext('2d');

  new Chart(this.ctx, {
    type:'line',
    data:{
      datasets:[{
        label:'Balance',
        data:this.balance,
        backgroundColor:"rgb(115 185 243 / 65%)",
        borderColor:"#007ee7",
        fill: false,
      },
      {
        label:'Interest',
        data:this.interest,
        backgroundColor:"#000811",
        borderColor:"#FF6700",
        fill: false,
      },
      {
        label:'Payments',
        data:this.payment,
        backgroundColor:"#FF6700",
        borderColor:"#000811",
        fill: false,
      }],
      labels:this.months
    }
  })
}
}
