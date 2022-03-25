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
    let config = {
      android: {
        vibrate: true,
        clearNotifications: true
      }
    }
    let push  = PushNotification.init(config);
    PushNotification.hasPermission(
      () => {
      console.log("Notification permission granted");
        push.subscribe("user_topic", () => {console.log("Subscribed to user_topic");}, () => {});
        push.on(
        'notification',
        (data: any) => {
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
