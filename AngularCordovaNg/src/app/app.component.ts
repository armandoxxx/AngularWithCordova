import {ChangeDetectorRef, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'AngularCordovaNg';
  messages: string[] = [];

  constructor(private cdRef: ChangeDetectorRef){

  }


  ngOnInit(): void {
    this.initPush();
  }


  initPush() {
    console.log('Initializing push plugin.');
    let config = {
      android: {
        vibrate: true,
        clearNotifications: true
      },
      ios: {
        alert: true,
        badge: true,
        sound: true
      }
    }

    this.messages.push("Initializing push plugin.");
    let push  = PushNotification.init(config);
    let me = this;
    PushNotification.hasPermission(
      () => {
        me.messages.push("Notification permission granted");
      console.log("Notification permission granted");
        push.subscribe("user_topic", () => {
            me.messages.push("Subscribed to user_topic");
          console.log("Subscribed to user_topic");},
          () => {
            me.messages.push("cannot subscribe to user_topic");
          console.log("cannot subscribe");
          });
        push.on(
        'notification',
        (data: any) => {
          me.messages.push("user topic notified");
          console.log(data);
        });
        push.on(
          'error',
          (data: any) => {
            console.log(data);
          });
      },
      () => {
        console.log("not permitted to receive notifications!");
      }
    );
  }
}
