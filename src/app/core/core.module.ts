import { NgModule } from '@angular/core';

import { CoreRoutingModule } from './core-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CoreRoutingModule,
    SharedModule,
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: PathLocationStrategy,
  }],
})
export class CoreModule { }
