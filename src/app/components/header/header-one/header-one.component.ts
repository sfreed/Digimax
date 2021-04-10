import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header-one',
  templateUrl: './header-one.component.html',
  styleUrls: ['./header-one.component.css']
})
export class HeaderOneComponent implements OnInit {

  current_web_site_name: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.current_web_site_name = this.route.snapshot.queryParamMap.get('site');
  }

}
