import {ChangeDetectorRef, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'AngularCordovaNg';

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
        //,topics: ['user_topic']
      },
      ios: {
        fcmSandbox: true,
        alert: true,
        badge: true,
        sound: true
        //,topics: ['user_topic']
      }
    }

    let push  = PushNotification.init(config);
    PushNotification.hasPermission(
      () => {
      console.log("Notification permission granted");
        push.on(
          'registration',
          (data: any) => {
            console.log("Got registration data: %o", data);
            console.log("will subscribe to topic: [user_topic]");
            push.subscribe("user_topic", () => {
                console.log("Subscribed to [user_topic]");},
              () => {
                console.log("cannot subscribe");
              });

          });
        push.on(
        'notification',
        (data: any) => {
          console.log("Got notification data: %o", data);
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
