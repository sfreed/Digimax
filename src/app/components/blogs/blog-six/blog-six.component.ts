import { Component, OnInit } from '@angular/core';
import { Button } from '../../components.model';
import { Blog, Categories, Popular } from '../blog.model';

@Component({
  selector: 'app-blog-six',
  templateUrl: './blog-six.component.html'
})
export class BlogSixComponent implements OnInit {
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
