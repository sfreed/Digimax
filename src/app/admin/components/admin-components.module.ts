import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './admin-components-routing.module';
import { AdminManagerComponent } from './admin-manager/admin-manager.component';
import { DxButtonModule, DxCheckBoxModule, DxContextMenuModule, DxDataGridModule, DxDropDownButtonModule, DxListModule, DxPopupModule, DxScrollViewModule, DxSelectBoxModule, DxSpeedDialActionModule, DxTabsModule, DxTextBoxModule, DxToolbarModule, DxTooltipModule, DxTreeListModule } from 'devextreme-angular';
import { AgentGeneralAdministrationComponent } from './agent-general-administration/agent-general-administration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgentMenuAdministrationComponent } from './agent-menu-administration/agent-menu-administration.component';
import { IconsModule } from 'src/app/views/icons/icons.module';
import { AgentPageAdministrationComponent } from './agent-page-administration/agent-page-administration.component';
import { ViewComponentsModule } from 'src/app/components/view-components.module';
import { AgentTemplateAdministrationComponent } from './agent-template-administration/agent-template-administration.component';
import { NgWizardModule } from 'ng-wizard';


@NgModule({
  declarations: [
    AdminManagerComponent, 
    AgentGeneralAdministrationComponent, 
    AgentMenuAdministrationComponent,
    AgentPageAdministrationComponent,
    AgentTemplateAdministrationComponent,
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    ViewComponentsModule,
    FormsModule,
    ReactiveFormsModule,

    IconsModule,

    DxDropDownButtonModule,
    DxTabsModule,
    DxTextBoxModule,
    DxToolbarModule,
    DxListModule, 
    DxPopupModule,
    DxDataGridModule,
    DxButtonModule,
    DxTreeListModule,
    DxContextMenuModule,
    DxScrollViewModule,
    DxSelectBoxModule, 
    DxCheckBoxModule,
    DxTooltipModule,
    DxSpeedDialActionModule,

    NgWizardModule
  ]
})
export class AdminComponentsModule { }
