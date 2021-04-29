import { Component, Input, OnInit } from '@angular/core';
import { Button } from '../../components.model';
import { Blog, Categories, Popular } from '../blog.model';

@Component({
  selector: 'app-blog-four',
  templateUrl: './blog-four.component.html'
})
export class BlogFourComponent implements OnInit {
  @Input('view') view: string = "preview";

  blog: Blog = new Blog();

  constructor() { }

  ngOnInit(): void {
    let button: Button = new Button();
    this.blog.buttons.push(button);

    let category: Categories = new Categories();
    this.blog.categories.push(category);

    let popular: Popular = new Popular();
    this.blog.popular.push(popular);
  }
  
  showConfigure() {
    this.view = 'edit';
  }
  showPreview() {
    this.view = 'preview';
  }


}
