import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { DataModule } from './data/data.module';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AuthModule } from './modules/auth/auth.module';
import { JwtService } from './service/jwt.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptor/token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    DataModule,
    AuthModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    JwtService,
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy,
   },
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
