import {Component, OnInit} from '@angular/core';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessageService]
})
export class AppComponent implements OnInit {
  title = 'pepal-front';

  constructor(private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.showConfirm();
  }

  showConfirm(): void {
    this.messageService.clear();
    this.messageService.add({
      key: 'c',
      sticky: true,
      summary: 'Appel Ouvert',
      detail: `Répondre à l'appel`,
      styleClass: 'sticky-note'
    });
  }

  onReject(): void {
    this.messageService.clear();
  }

  onConfirm(): void {
    this.messageService.clear();
  }
}
