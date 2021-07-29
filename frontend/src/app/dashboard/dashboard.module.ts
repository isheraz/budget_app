import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HomeModule } from './home/HomeModule';
import { DashboardResource } from './service/DashboardResource';
import { DashboardService } from './service/DashboardService';

@NgModule({
  declarations: [],
  imports: [HomeModule, HttpClientModule],
  exports: [HomeModule],
  providers: [DashboardService, DashboardResource],
})
export class DashboardModule {}
