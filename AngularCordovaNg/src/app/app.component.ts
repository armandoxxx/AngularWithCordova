import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {BroadcastService} from "./services/broadcast.service";
import {Subject} from "rxjs";
import {PushSubscriptionData} from "./models/push-subscription-data";
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'AngularCordovaNg';

  push: any = undefined;
  subscribedTopics: string[] = [];


  private disableSubscriptions: Subject<void> = new Subject<void>();

  constructor(private cdRef: ChangeDetectorRef, private broadcastService: BroadcastService){

  }


  ngOnInit(): void {
    this.initPush();
    this.initEvents();
  }


  ngOnDestroy(): void {
    this.disableSubscriptions.next();
  }


  initPush() {
    console.log('Initializing push plugin.');
    let config = {
      android: {
        vibrate: true,
        clearNotifications: true
      },
      ios: {
        fcmSandbox: true,
        alert: true,
        badge: true,
        sound: true
      }
    }
    this.push  = PushNotification.init(config);
    PushNotification.hasPermission(
      () => {
      console.log("Notification permission granted");
        this.push.on(
          'registration',
          (data: any) => {
            console.log("Got registration data: %o", data);
            console.log("will subscribe to topic: [user_topic]");
            this.subscribeToTopic('user_topics');
          });
      },
      () => {
        console.log("not permitted to receive notifications!");
      }
    );
  }


  initEvents() {
    this.broadcastService.pushSubscriptionsEvent.pipe(takeUntil(this.disableSubscriptions)).subscribe( (subscriptionData:PushSubscriptionData) => {
      if (subscriptionData.action == 'add') {
        this.subscribeToTopic(subscriptionData.topicName);
      } else if (subscriptionData.action == 'remove') {
        this.unSubscribeFromTopic(subscriptionData.topicName);
      }
    });
  }


  private subscribeToTopic(topicName: string): void {
    this.push.subscribe(topicName,
      () => {
        console.log('Subscribed to [user_topic]');
        this.enableNotificationEvent();
        this.addTopic(topicName);

      },
      () => {
        console.log("cannot subscribe");
        this.disableNotificationEvent();
        this.removeTopic("user_topic");
      }
    );
  }

  private unSubscribeFromTopic(topicName: string): void {
  }


  private onNotificationEvent(data: any) {
    console.log("Got notification data: %o", data);
  }


  private onNotificationError(data: any) {
    console.log("Got notification error data: %o", data);
  }


  private enableNotificationEvent() {
    this.push.on('notification', this.onNotificationEvent);
    this.push.on('error', this.onNotificationError);
  }


  private disableNotificationEvent() {
    this.push.off('notification', this.onNotificationEvent);
    this.push.off('error', this.onNotificationError);
  }


  private addTopic(topicName: string): void {
    this.subscribedTopics.push(topicName);
    console.log('added topic [%s]', topicName);
    this.cdRef.detectChanges();
  }


  private removeTopic(topicName: string): void {
    if (this.subscribedTopics.indexOf(topicName) !== -1) {
      this.subscribedTopics.splice(this.subscribedTopics.indexOf(topicName), 1);
      console.log('removed topic [%s]', topicName);
    }
    this.cdRef.detectChanges();
  }


  private isTopicSubscribed(topicName: string): void {

  }
}
