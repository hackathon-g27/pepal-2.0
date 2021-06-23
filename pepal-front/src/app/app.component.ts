import { Component } from '@angular/core';
import {SwPush, SwUpdate} from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pepal-front';
  constructor(private update: SwUpdate, private push: SwPush) {
    update.available.subscribe(update => {
      console.log('update available');
    });

    push.messages.subscribe(msg => {
      console.log(msg);
    });

    const key = 'BJfAmFl74-06SLITrQXPSz0DHfidw5EuglCHeKmpikpUGiunw8PlHC9UoDUG0Tp2TGygfozUPPx4U3pEgjZnFpw';
    push.requestSubscription({serverPublicKey: key})
      .then(pushSubscription => {
        console.log(pushSubscription.toJSON())
      });
  }
}
