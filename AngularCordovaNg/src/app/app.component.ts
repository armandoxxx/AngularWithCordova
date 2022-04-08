import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {BroadcastService} from "./services/broadcast.service";
import {Observable, Subject} from "rxjs";
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
  data: string = '';
  currentTime: Date = new Date();

  private push: any = undefined;

  //work flags
  private eventsInitialized: boolean = false;
  private subscribing: boolean = false;
  private subscribedOnRegister: boolean = false;

  private topicSubscriptionInitTimer:any = undefined;

  private disableSubscriptions: Subject<void> = new Subject<void>();

  private registration: Subject<void> = new Subject<void>();
  private registrationsSource: Subject<void> = new Subject<void>();

  private afterRegistrationsEvent: Observable<void> = this.registrationsSource.asObservable();


  constructor(private cdRef: ChangeDetectorRef, private broadcastService: BroadcastService){

  }


  ngOnInit(): void {
    this.initEvents();
    this.initPush();
  }


  ngOnDestroy(): void {
    this.disableSubscriptions.next();
    this.disableNotificationEvents();
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
    this.enableNotificationEvents();

    PushNotification.hasPermission(
      () => {
        console.log("Notification permission granted");
        //this.subscribeToTopic('user_topic'); //commented out to try and replace with registration observable.
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
    this.afterRegistrationsEvent.pipe(takeUntil(this.disableSubscriptions)).subscribe(
      () => {
          if (this.topicSubscriptionInitTimer != undefined) {
            clearTimeout(this.topicSubscriptionInitTimer);
          }
          let me = this;
          this.topicSubscriptionInitTimer = setTimeout( () => {me.subscribeToTopic('user_topic')}, 2000);
      }
    );
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
    console.log("Will subscribe to topic: [%s]", topicName);
    this.subscribing = true;
    this.push.subscribe(topicName,
      () => {
        console.log('Subscribed to [%s]', topicName);
        this.addTopic(topicName);
        this.subscribing = false;
      },
      () => {
        console.log("Cannot subscribe to [%s]", topicName);
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
    this.data = JSON.stringify(data);
    this.currentTime = new Date();
    this.cdRef.detectChanges();
  }


  private onNotificationError(data: any) {
    console.log("Got notification error data: %o", data);
  }


  private onRegistration(data: any) {
    console.log("Got registration data: %o", data);
    this.registrationsSource.next();
  }


  private enableNotificationEvents() {
    if (this.eventsInitialized) {
      console.log('Events already initialized');
      return;
    }
    this.push.on('registration', this.onRegistration.bind(this));
    this.push.on('notification', this.onNotificationEvent.bind(this));
    this.push.on('error', this.onNotificationError.bind(this));
    this.eventsInitialized = true;
  }


  private disableNotificationEvents() {
    if (!this.eventsInitialized) {
      console.log('Events not initialized!');
      return;
    }
    this.push.off('registration', this.onRegistration.bind(this));
    this.push.off('notification', this.onNotificationEvent.bind(this));
    this.push.off('error', this.onNotificationError.bind(this));
    console.log("Events disabled");
    this.eventsInitialized = false;
    this.subscribedOnRegister = false;
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
