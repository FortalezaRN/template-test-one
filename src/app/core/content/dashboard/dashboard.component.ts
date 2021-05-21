import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  flow = {
    inbound: {
      today: 15454.47,
      rest: 134370.14
    },
    outbound: {
      today: 45478.76,
      rest: 59680.32
    },
    inLater: 92295.53,
    outLater: 500514.53
  };

  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'right',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx: any) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };
  public pieChartLabels: Label[] = ['Erros', 'Entrada', 'Saida'];
  public pieChartData: number[] = [300, 500, 100];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [ChartDataLabels];
  public pieChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
    },
  ];

  public barChartOptions: ChartOptions = {
    responsive: false,
    maintainAspectRatio: false,
    tooltips: { enabled: false },
    layout: { padding: { right: 80} },
    scales: { xAxes: [{
      ticks: { beginAtZero: true, display: false },
      gridLines: { color: "rgba(0, 0, 0, 0)", }
    }], yAxes: [{
      ticks: { beginAtZero: true },
      gridLines: { color: "rgba(0, 0, 0, 0)", }
    }] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
        formatter: function(value) {
          const formCurrency = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL', minimumFractionDigits: 2});
          return formCurrency.format(parseInt('' + value));
        }
      }
    }
  };

  public barChartLegend = false;
  public barChartPlugins = [ChartDataLabels];
  public barChartType: ChartType = 'horizontalBar';

  public barChartInboundLabels: Label[] = ['Categoria I', 'Categoria II', 'Categoria III', 'Categoria IV', 'Categoria V', 'Outra'];
  public barChartInboundData: ChartDataSets[] = [
    { data: [300000.23, 123832.32, 123122.23, 312432.32, 323452.32, 325243.32], label: 'Receita em R$' },
  ];
  public chartInboundColors: any[] = [
    {backgroundColor: ['#1DE9B6', '#1DE9B6', '#1DE9B6', '#1DE9B6', '#1DE9B6', '#1DE9B6']},
  ];

  public barChartOutboundLabels: Label[] = ['Categoria I', 'Categoria II', 'Categoria III', 'Categoria IV', 'Categoria V', 'Outra'];
  public barChartOutboundData: ChartDataSets[] = [
    { data: [300000.23, 123832.32, 123122.23, 312432.32, 323452.32, 325243.32], label: 'Despesa em R$' },
  ];
  public chartOutboundColors: any[] = [
    {backgroundColor: ['#F48B2B', '#F48B2B', '#F48B2B', '#F48B2B', '#F48B2B', '#F48B2B']}
  ];

  monthsList = [
    { id: 1, name: 'Maio 2021'},
    { id: 2, name: 'Abril 2021'},
    { id: 3, name: 'Março 2021'},
    { id: 4, name: 'Fevereiro 2021'},
    { id: 5, name: 'Janeiro 2021'}
  ];

  activeInboundMonth = { id: 1, name: 'Maio 2021'};
  activeOutboundMonth = { id: 1, name: 'Maio 2021'};

  constructor() { }

  ngOnInit(): void {
  }

}
