import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { MaterialUiModule } from '../styles/material-ui/material-ui.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../layout/header/header.component';
import { FooterComponent } from '../layout/footer/footer.component';
import { MainComponent } from '../layout/main/main.component';


@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    MaterialUiModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    MaterialUiModule,
    MainComponent,
    HeaderComponent,
    FooterComponent,
  ],
})
export class SharedModule { }
