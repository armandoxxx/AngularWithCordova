import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {PushSubscriptionData} from "../models/push-subscription-data";
import {Article} from "../models/article";

@Injectable({
  providedIn: 'root'
})
export class BroadcastService {

  private pushSubscriptionsSource = new Subject<PushSubscriptionData>();

  pushSubscriptionsEvent = this.pushSubscriptionsSource.asObservable();

  constructor() { }


  subscribeToTopic(topicName: string) {
    const data:PushSubscriptionData = {
      action: 'subscribe',
      topicName: topicName
    };
    this.pushSubscriptionsSource.next(data);
  }

  unSubscribeFromTopic(topicName: string) {
    const data:PushSubscriptionData = {
      action: 'unsubscribe',
      topicName: topicName
    };
    this.pushSubscriptionsSource.next(data);
  }

  /*isTopicSubscribed(topicName: string): Observable<Article[]> {
    //return true;
  }*/

}


