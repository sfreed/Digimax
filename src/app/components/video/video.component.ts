import { Component, Input, OnInit } from '@angular/core';
import { SectionList } from '../components.model';
import { Video } from './video.model';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html'
})
export class VideoComponent implements OnInit {
  @Input('view') view: string = "preview";

  video: Video = new Video();

  constructor() { }

  ngOnInit(): void {
    let sectionList: SectionList = new SectionList();
    this.video.sectionList.push(sectionList);
  }
  
  showConfigure() {
    this.view = 'edit';
  }
  showPreview() {
    this.view = 'preview';
  }


}
