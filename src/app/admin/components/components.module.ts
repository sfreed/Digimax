import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { AdminManagerComponent } from './admin-manager/admin-manager.component';
import { AgentFooterComponent } from './shared/footer/footer.component';
import { AgentTopbarComponent } from './shared/topbar/topbar.component';
import { DxButtonModule, DxCheckBoxModule, DxContextMenuModule, DxDataGridModule, DxDropDownButtonModule, DxListModule, DxPopupModule, DxScrollViewModule, DxSelectBoxModule, DxTabsModule, DxTextBoxModule, DxToolbarModule, DxTooltipModule, DxTreeListModule } from 'devextreme-angular';
import { AgentGeneralAdministrationComponent } from './agent-general-administration/agent-general-administration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgentMenuAdministrationComponent } from './agent-menu-administration/agent-menu-administration.component';
import { MenuAdministrationComponent } from './menu-administration/menu-administration.component';
import { IconsModule } from 'src/app/views/icons/icons.module';
import { AgentPageAdministrationComponent } from './agent-page-administration/agent-page-administration.component';


@NgModule({
  declarations: [
    AdminManagerComponent, 
    AgentGeneralAdministrationComponent, 
    AgentMenuAdministrationComponent,
    AgentFooterComponent, 
    AgentTopbarComponent,
    MenuAdministrationComponent,
    AgentPageAdministrationComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
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
  ]
})
export class ComponentsModule { }
