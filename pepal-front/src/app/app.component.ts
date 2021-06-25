import {Component, OnInit} from '@angular/core';
import {MessageService} from 'primeng/api';
import {AppelContexteService} from './shared/services/appel-contexte.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessageService]
})
export class AppComponent implements OnInit {
  title = 'pepal-front';

  constructor(private messageService: MessageService, private acs: AppelContexteService) {
  }

  ngOnInit(): void {
    this.acs.observeAppel().subscribe(isOuvert => {
      if (isOuvert) {
        this.showConfirm();
      }
    });
  }

  showConfirm(): void {
    this.messageService.clear();
    this.messageService.add({
      key: 'c',
      sticky: true,
      summary: 'Appel Ouvert',
      detail: `La session d'appel du cours Angular de 9h00 à 12h30, animé par Jacob Thornton est ouvert`,
      styleClass: 'appel-open'
    });
  }

  onReject(): void {
    this.messageService.clear();
  }

  onConfirm(): void {
    this.acs.toggleAppel();
    this.messageService.clear();
    setTimeout(() =>
        this.messageService.add({
          key: 'center',
          life: 1500,
          summary: `Vous avez répondu présent à l'appel`,
          detail: `La session d'appel du cours Angular de 9h00 à 12h30, animé par Jacob Thornton est ouvert`,
          styleClass: 'appel-confirm'
        }),
      1000
    );
  }
}
