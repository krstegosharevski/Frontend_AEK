import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionsComponent } from './actions/actions.component';
import { MainComponent } from './main/main.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ReportsComponent } from './reports/reports.component';
import { CalendarsComponent } from './calendars/calendars.component';
import { UsersComponent } from './users/users.component';
import { OperatorsComponent } from './operators/operators.component';
import { AdminPanelComponent } from './admin_components/admin-panel/admin-panel.component';
import { AdminOperatorComponent } from './admin_components/admin-operator/admin-operator.component';
import { AdminNumbersComponent } from './admin_components/admin-numbers/admin-numbers.component';
import { LoggoutComponent } from './loggout/loggout.component';
import { TesthtmlComponent } from './testhtml/testhtml.component';
import { AdminHeadComponent } from './admin_components/admin-head/admin-head.component';
import { PortedNumbersComponent } from './ported-numbers/ported-numbers.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'actions', component: ActionsComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'main', component: MainComponent},
  {path: 'reports', component: ReportsComponent},
  {path: 'calendars', component: CalendarsComponent},
  {path: 'users', component: UsersComponent},
  {path: 'admin', component: AdminHeadComponent},
  {path: 'operators', component: OperatorsComponent},
  {path: 'adminpanel', component: AdminPanelComponent},
  {path: 'adminoperator', component: AdminOperatorComponent},
  {path: 'adminnumbers', component: AdminNumbersComponent},
  {path: 'loggout', component: LoggoutComponent},
  {path: 'test', component: TesthtmlComponent},
  {path: 'portednumbers', component: PortedNumbersComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
