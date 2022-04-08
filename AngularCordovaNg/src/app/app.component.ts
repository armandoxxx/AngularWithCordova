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
  subscribedTopics: string[] = [];


  private push: any = undefined;

  //work flags
  private eventsInitialized: boolean = false;
  private subscribing: boolean = false;


  private disableSubscriptions: Subject<void> = new Subject<void>();

  constructor(private cdRef: ChangeDetectorRef, private broadcastService: BroadcastService){

  }


  ngOnInit(): void {
    this.initPush();
    this.initEvents();
  }


  ngOnDestroy(): void {
    this.disableSubscriptions.next();
    this.disableNotificationEvent();
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
    this.push = PushNotification.init(config);
    PushNotification.hasPermission(
      () => {
      console.log("Notification permission granted");
        this.push.on(
          'registration',
          (data: any) => {
            console.log("Got registration data: %o", data);
            console.log("will subscribe to topic: [user_topic]");
            this.subscribeToTopic('user_topic');
            this.enableNotificationEvent();
          });
      },
      () => {
        console.log("not permitted to receive notifications!");
      }
    );
  }


  initEvents() {
    this.broadcastService.pushSubscriptionsEvent.pipe(takeUntil(this.disableSubscriptions)).subscribe( (subscriptionData: PushSubscriptionData) => {
      console.log('Got subscription event data [%o]', subscriptionData);
      if (subscriptionData.action == 'subscribe') {
        this.subscribeToTopic(subscriptionData.topicName);
      } else if (subscriptionData.action == 'unsubscribe') {
        this.unSubscribeFromTopic(subscriptionData.topicName);
      }
    });
  }


  private subscribeToTopic(topicName: string): void {
    if (this.subscribedTopics.indexOf(topicName) !== -1) {
      console.log('Already subscribed to topic [%s]', topicName);
      return;
    }
    if (this.subscribing) {
      console.log('Already subscribing to topic [%s]', topicName);
      return;
    }
    this.subscribing = true;
    this.push.subscribe(topicName,
      () => {
        console.log('Subscribed to [%s]', topicName);
        this.addTopic(topicName);
        this.subscribing = false;
      },
      () => {
        console.log("cannot subscribe to [%s]", topicName);
        this.removeTopic(topicName);
        this.subscribing = false;
      }
    );
  }


  private unSubscribeFromTopic(topicName: string): void {
    if (this.subscribedTopics.indexOf(topicName) === -1) {
      console.log('Not subscribed to topic [%s]', topicName);
      return;
    }
    this.push.unsubscribe(
      topicName,
      () => {
        console.log('Successfully unsubscribed from topic [%s]', topicName);
        this.removeTopic(topicName);
      },
      (e: any) => {
        console.log('Cannot unsubscribe from topic [%s] error [%o]', topicName, e);
      }
    );
  }


  private onNotificationEvent(data: any) {
    console.log("Got notification data: %o", data);
  }


  private onNotificationError(data: any) {
    console.log("Got notification error data: %o", data);
  }


  private enableNotificationEvent() {
    if (this.eventsInitialized) {
      console.log('Events already initialized');
      return;
    }
    this.push.on('notification', this.onNotificationEvent);
    this.push.on('error', this.onNotificationError);
    this.eventsInitialized = true;
  }


  private disableNotificationEvent() {
    if (!this.eventsInitialized) {
      console.log('Events not initialized!');
      return;
    }
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
