import { Component, OnInit } from '@angular/core';
import {DashboardClient} from '../../api/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  recipesLast30: { name: string; value: number }[];
  ordersByClient30: { name: string; value: number }[];
  ordersCancelled30: { name: string; value: number }[];
  ordersByWeek10: { name: string; value: number }[];

  constructor(dashboardClient: DashboardClient) {
    dashboardClient.getLast30DaysRecipes().subscribe(data => {
      this.recipesLast30 = data.map(x => { return {
        name: x.label,
        value: x.value
      }; });
    });

    dashboardClient.getOrdersByClientLast30Days().subscribe(data => {
      this.ordersByClient30 = data.map(x => { return {
        name: x.label,
        value: x.value
      }; });
    });

    dashboardClient.getOrdersCancelledLast30().subscribe(data => {
      this.ordersCancelled30 = data.map(x => { return {
        name: x.label,
        value: x.value
      }; });
    });

    dashboardClient.getOrdersByWeekLast10().subscribe(data => {
      this.ordersByWeek10 = data.map(x => { return {
        name: x.label,
        value: x.value
      }; });
    });
  }

  ngOnInit(): void {

  }

}
