import { Component, OnInit } from '@angular/core';
import { STEP_STATE, NgWizardConfig, THEME, NgWizardService, StepChangedArgs, StepValidationArgs } from 'ng-wizard';
import { of } from 'rxjs';
import { Tab } from '../../models/tab.model';

@Component({
  selector: 'app-admin-manager',
  templateUrl: './admin-manager.component.html',
  styleUrls: ['./admin-manager.component.css']
})
export class AdminManagerComponent implements OnInit {
  breadCrumbItems: Array<{}>;

  tabs: Tab[] = [{
    id: 0,
    text: "General Administration",
    icon: "user",
    template: "General Administration", 
  },{
    id: 1,
    text: "Menu Administration",
    icon: "user",
    template: "Menu Administration", 
  },{
    id: 2,
    text: "Card Administration",
    icon: "user",
    template: "Card Administration", 
  },{
    id: 3,
    text: "Page Administration",
    icon: "user",
    template: "Page Administration", 
  }];

  editorOptions: {
    colSpan: 2
  };

  selectedTab: string = 'Page Administration';
  
  stepStates = {
    normal: STEP_STATE.normal,
    disabled: STEP_STATE.disabled,
    error: STEP_STATE.error,
    hidden: STEP_STATE.hidden
  };
 
  config: NgWizardConfig = {
    selected: 0,
    theme: THEME.arrows,
    toolbarSettings: {
      toolbarExtraButtons: [
        { text: 'Finish', class: 'btn btn-info', event: () => { alert("Finished!!!"); } }
      ],
    }
  };
  
  constructor(private ngWizardService: NgWizardService) { }

  ngOnInit(): void {
    
    this.breadCrumbItems = [{ label: 'Admin' }, { label: 'My Administration Portal', active: true }];

  }

  selectTab(e){
    this.selectedTab = e.itemData.template;
  }

  showPreviousStep(event?: Event) {
    this.ngWizardService.previous();
  }
 
  showNextStep(event?: Event) {
    this.ngWizardService.next();
  }
 
  resetWizard(event?: Event) {
    this.ngWizardService.reset();
  }
 
  setTheme(theme: THEME) {
    this.ngWizardService.theme(theme);
  }
 
  stepChanged(args: StepChangedArgs) {
    console.log(args.step);
  }
 
  isValidTypeBoolean: boolean = true;
 
  isValidFunctionReturnsBoolean(args: StepValidationArgs) {
    return true;
  }
 
  isValidFunctionReturnsObservable(args: StepValidationArgs) {
    return of(true);
  }
  
}
