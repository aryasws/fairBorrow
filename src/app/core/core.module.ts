import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './components/top-nav/top-nav.component';


@NgModule({
  declarations: [
    TopNavComponent
  ],
  exports:[
 TopNavComponent,
  ],
  imports: [
    CommonModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CoreModule { }
