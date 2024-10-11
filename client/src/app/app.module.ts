import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ActionsComponent } from './actions/actions.component';
import { ReportsComponent } from './reports/reports.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CalendarsComponent } from './calendars/calendars.component';
import { UsersComponent } from './users/users.component';
import { OperatorsComponent } from './operators/operators.component';
import { AdminPanelComponent } from './admin_components/admin-panel/admin-panel.component';
import { AdminOperatorComponent } from './admin_components/admin-operator/admin-operator.component';
import { AdminNumbersComponent } from './admin_components/admin-numbers/admin-numbers.component';
import { LoggoutComponent } from './loggout/loggout.component';
import { TesthtmlComponent } from './testhtml/testhtml.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AdminHeadComponent } from './admin_components/admin-head/admin-head.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PortedNumbersComponent } from './ported-numbers/ported-numbers.component';
import { PortingRequestsComponent } from './porting-requests/porting-requests.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';

export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainComponent,
    FooterComponent,
    PortfolioComponent,
    ActionsComponent,
    ReportsComponent,
    CalendarsComponent,
    UsersComponent,
    OperatorsComponent,
    AdminPanelComponent,
    AdminOperatorComponent,
    AdminNumbersComponent,
    LoggoutComponent,
    TesthtmlComponent,
    AdminHeadComponent,
    PortedNumbersComponent,
    PortingRequestsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TabsModule.forRoot(),
    PaginationModule.forRoot(),
    ReactiveFormsModule,
    TranslateModule.forRoot(
      {
      loader:{
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps:[HttpClient]
      }
    }
    )
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
