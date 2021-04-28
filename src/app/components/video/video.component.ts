import { Component, OnInit } from '@angular/core';
import { SectionList } from '../components.model';
import { Video } from './video.model';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html'
})
export class VideoComponent implements OnInit {
  video: Video = new Video();

  constructor() { }

  ngOnInit(): void {
    let sectionList: SectionList = new SectionList();
    this.video.sectionList.push(sectionList);
  }

}
