import { Injectable } from '@angular/core';
import { ApiConfig } from 'src/app/ApiConfig';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ExpenseList } from './dataModel/expenseList';

@Injectable()
export class DashboardResource {
  private readonly URL = ApiConfig.url;

  constructor(private httpClient: HttpClient) {}

  public getAllExpense(): Observable<ExpenseList[]> {
    return this.httpClient.get(this.URL + '/expenses') as Observable<
      ExpenseList[]
    >;
  }
}
