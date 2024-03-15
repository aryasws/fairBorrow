import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AppComponent } from './core/app.component';
import { CoreModule } from './core/core.module';
import { VisualizationComponent } from './pages/visualization/visualization.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    VisualizationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],

  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
