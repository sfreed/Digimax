import { Component, OnInit } from '@angular/core';
import { Button } from '../../components.model';
import { Blog } from '../blog.model';

@Component({
  selector: 'app-blog-one',
  templateUrl: './blog-one.component.html'
})
export class BlogOneComponent implements OnInit {
  blog: Blog = new Blog();

  constructor() { }

  ngOnInit(): void {
    let button: Button = new Button();
    this.blog.buttons.push(button);
  }

}
