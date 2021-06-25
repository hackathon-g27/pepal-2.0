import { Component, OnInit } from '@angular/core';
import { NavItem } from '../../models/nav-item';
import {AppelContexteService} from '../../services/appel-contexte.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navItems: NavItem[] = [
    {
      title: 'Cours',
      link: 'cours',
      badge: '1'
    }, {
      title: 'Messagerie',
      link: '#',
      badge: '3'
    }, {
      title: 'Compte',
      link: '#'
    },
    {
      title: 'Déconnexion',
      link: '#'
    },

  ];

  constructor(private acs: AppelContexteService) { }

  ngOnInit(): void {
  }

  toggleAppel(): void {
    this.acs.toggleAppel();
  }
}
