import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

declare var apiRTC: any;

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

  conversationFormGroup = this.fb.group({
    name: this.fb.control('', [Validators.required])
  });

  roomId: string;

  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.roomId = this.activatedRoute.snapshot.params.roomId;
    this.getOrcreateConversation();
  }

  get conversationNameFc(): FormControl {
    return this.conversationFormGroup.get('name') as FormControl;
  }

  getOrcreateConversation(): void {
    let localStream = null;
    // 1 CREATE USER AGENT
    const ua = new apiRTC.UserAgent({
      uri: 'apzkey:3eb40c8d4a62c70107ac757458533c44'
    });
    // 2 REGISTER
    ua.register().then((session) => {
      // 3 CREATE CONVERSATION
      const conversation = session.getConversation(this.roomId);
      // 4 ADD EVENT LISTENER : WHEN NEW STREAM IS AVAILABLE IN CONVERSATION
      conversation.on('streamListChanged', (streamInfo: any) => {
        console.log('streamListChanged :', streamInfo);
        if (streamInfo.listEventType === 'added') {
          if (streamInfo.isRemote === true) {
            conversation.subscribeToMedia(streamInfo.streamId)
              .then((stream) => {
                console.log('subscribeToMedia success');
              }).catch((err) => {
              console.error('subscribeToMedia error', err);
            });
          }
        }
      });
      // 4 BIS ADD EVENT LISTENER : WHEN STREAM IS ADDED/REMOVED TO/FROM THE CONVERSATION
      conversation
        .on('streamAdded', (stream: any) =>
          stream.addInDiv('remote-container', 'remote-media-' + stream.streamId, {}, false)
        )
        .on('streamRemoved', (stream: any) =>
          stream.removeFromDiv('remote-container', 'remote-media-' + stream.streamId)
        );
      // 5 CREATE LOCAL STREAM
      ua.createStream({
        constraints: {
          audio: true,
          video: true
        }
      })
        .then((stream: any) => {
          console.log('createStream :', stream);
          // Save local stream
          localStream = stream;
          stream.removeFromDiv('local-container', 'local-media');
          stream.addInDiv('local-container', 'local-media', {}, true);

          conversation
            // 6 join conversation
            .join()
            // 7 publish local stream
            .then((response: any) =>
              conversation.publish(localStream)
            )
            .catch((err) =>
              console.error('Conversation join error', err)
            );
        }).catch((err) => {
        console.error('create stream error', err);
      });
    });
  }

}
