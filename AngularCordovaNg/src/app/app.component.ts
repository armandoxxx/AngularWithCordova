import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {BroadcastService} from "./services/broadcast.service";
import {Observable, Subject} from "rxjs";
import {PushSubscriptionData} from "./models/push-subscription-data";
import { takeUntil } from 'rxjs/operators';
import {NotificationService} from "./services/notification.service";

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


  private disableSubscriptions: Subject<void> = new Subject<void>();



  constructor(private cdRef: ChangeDetectorRef,
              private broadcastService: BroadcastService,
              private notificationService: NotificationService){

  }


  ngOnInit(): void {
    this.notificationService.initPush();
    this.initEvents();
  }


  ngOnDestroy(): void {
    this.disableSubscriptions.next();
  }



  initEvents() {
    this.notificationService.onNotify.subscribe(this.handlePushNotification.bind(this));
  }

  handlePushNotification(data: any): void {
    this.data = JSON.stringify(data);
    this.currentTime = new Date();
    this.cdRef.detectChanges();
  }

}
