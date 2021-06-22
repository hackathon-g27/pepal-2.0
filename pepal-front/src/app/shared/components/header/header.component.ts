import { Component, OnInit } from '@angular/core';
import { NavItem } from '../../models/nav-item';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navItems: NavItem[] = [
    {
      title:'Cours',
      link:'#',
      badge:'1'
    }, {
      title: 'Messagerie',
      link: "#",
      badge:'3'
    },{
      title: 'Compte',
      link: "#"
    },
    {
      title: 'Déconnexion',
      link: "#"
    },

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
