import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DashboardResource } from './DashboardResource';
import { ExpenseList } from './dataModel/expenseList';

@Injectable()
export class DashboardService {
  constructor(private dashboardResource: DashboardResource) {}

  public getExpenses(): Observable<ExpenseList[]> {
    return this.dashboardResource.getAllExpense();
  }
}
