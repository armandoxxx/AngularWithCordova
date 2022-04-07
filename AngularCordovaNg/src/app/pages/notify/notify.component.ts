import { Component, OnInit } from '@angular/core';
import {BroadcastService} from "../../services/broadcast.service";

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.scss']
})
export class NotifyComponent implements OnInit {

  constructor(private broadcastService: BroadcastService) { }

  ngOnInit(): void {
  }


  isSubscribed(topicName: string) {
    return true;
  }


  subscribeTo(topicName: string) {
    this.broadcastService.subscribeToTopic(topicName);
  }


  unSubscribeFrom(topicName: string) {
    this.broadcastService.unSubscribeFromTopic(topicName);
  }
}
