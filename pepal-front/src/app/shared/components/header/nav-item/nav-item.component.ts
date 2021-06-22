import { isNgTemplate } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { NavItem } from 'src/app/shared/models/nav-item';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent implements OnInit {
  @Input()
  item: NavItem;
  constructor() { }

  ngOnInit(): void {
  }

}
