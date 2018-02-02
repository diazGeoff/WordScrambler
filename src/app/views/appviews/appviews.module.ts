import { IboxtoolsModule } from '../../components/common/iboxtools/iboxtools.module';
import { FlotModule } from '../../components/charts/flotChart';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import { FormsModule } from '@angular/forms';

import {PeityModule } from '../../components/charts/peity';
import {SparklineModule } from '../../components/charts/sparkline';
import { LoginComponent } from 'app/views/appviews/login/login.component';
import { StarterViewComponent } from 'app/views/appviews/starter/starterview.component';


const NavigatableComponents: any = [
	LoginComponent,
	StarterViewComponent
];

@NgModule({
  declarations: [
    ...NavigatableComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    PeityModule,
    SparklineModule,
    ChartsModule,
    FlotModule,
    IboxtoolsModule
  ],
  exports: [
    ...NavigatableComponents
  ],
})

export class AppviewsModule {
}
