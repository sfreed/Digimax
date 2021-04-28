import { Component, OnInit } from '@angular/core';
import { Button } from '../../components.model';
import { Blog, Categories, Popular } from '../blog.model';

@Component({
  selector: 'app-blog-three',
  templateUrl: './blog-three.component.html'
})
export class BlogThreeComponent implements OnInit {
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

}
