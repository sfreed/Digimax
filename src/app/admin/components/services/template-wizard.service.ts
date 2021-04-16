import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Template } from '../config/template-list';

@Injectable({
  providedIn: 'root'
})
export class TemplateWizardService {

  public selectedTemplate = new Subject<Template>();

  constructor() { }
}
