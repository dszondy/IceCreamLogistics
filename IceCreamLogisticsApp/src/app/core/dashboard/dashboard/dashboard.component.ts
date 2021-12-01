import { Component, OnInit } from '@angular/core';
import {DashboardClient} from '../../api/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  recipesLast30: any;

  constructor(dashboardClient: DashboardClient) {
    dashboardClient.getLast30DaysRecipes().subscribe(data => {
      this.recipesLast30 = data.map(x => { return {
        name: x.label,
        value: x.value
      }; });
    });
  }

  ngOnInit(): void {

  }

}
