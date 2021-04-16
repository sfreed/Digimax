import { Component, OnInit } from '@angular/core';
import { Template, templates } from '../config/template-list';
import { TemplateWizardService } from '../services/template-wizard.service';

@Component({
  selector: 'app-agent-template-administration',
  templateUrl: './agent-template-administration.component.html',
  styleUrls: ['./agent-template-administration.component.css']
})
export class AgentTemplateAdministrationComponent implements OnInit {
  templates: Template[];
  selectedTemplate: Template;

  showPreview: boolean = false;
  
  w: Window = window;

  constructor(private wizard: TemplateWizardService) { 
    this.templates = templates;
  }

  ngOnInit(): void {
  }

  previewTemplate(e){
    this.w.open("/"+e.row.data.theme, "_blank");
  }

  selectTemplate(e){
    this.wizard.selectedTemplate.next(e.row.data);
  }
}
