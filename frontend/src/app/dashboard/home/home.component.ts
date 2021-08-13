import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DashboardService } from '../service/DashboardService';
import { ExpenseList } from '../service/dataModel/expenseList';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeComponent implements OnInit {
  public expList: Observable<ExpenseList[]> | undefined;
  public incomeList: Observable<ExpenseList[]> | undefined;

  constructor(private dashboardService: DashboardService) {}

  public monthlyBudget = { startingBalance: '$1000', endingBalance: '$1500' };
  public increase = { percentage: '50%', amount: '$500' };
  public expense = { planned: '$950', actual: '$1000' };
  public income = { planned: '$1350', actual: '$1450' };
  public headers = ['', 'Planned', 'Actual', 'Diff'];

  ngOnInit() {
    this.expList = this.dashboardService.getExpenses();
    this.incomeList = this.dashboardService.getIncome();
  }
}
