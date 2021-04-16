import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageOneComponent } from './page-one/page-one.component';
import { ViewComponentsModule } from '../components/view-components.module';

@NgModule({
  declarations: [PageOneComponent],
  imports: [
    CommonModule,
    ViewComponentsModule
  ]
})
export class PagesModule { }
