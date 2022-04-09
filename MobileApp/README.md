# Generate Firebase API access tokens

use [this project](https://github.com/armandoxxx/firebaseAccessTokenGenerator) to generate access tokens for sending push notifications

# MESSAGE PAYLOADS

## ANDROID ONLY

This message will show badge count and on click open app with event data received.

FCM end point:     
https://fcm.googleapis.com/v1/projects/{{your_FCM_project_ID}}/messages:send

Note: if you want to open the app and get the event:    
**"click_action": "com.adobe.phonegap.push.background.MESSAGING_EVENT"**    
is needed on android.

```
{   
    "message": {
        "topic":"user_topic",
        "android": {
            "data": {
               "title": "title Android x",
               "body": "body andorid x",
               "article": "android article x",
               "count": "5",
               "click_action": "com.adobe.phonegap.push.background.MESSAGING_EVENT",
            }
        }
    }
}
```

## IOS ONLY

FCM end point:     
https://fcm.googleapis.com/v1/projects/{{your_FCM_project_ID}}/messages:send

```
{
    "message": {
        "topic":"user_topic",
         "notification": {
            "title": "title generic",
            "body": "body generic"
        },
        "apns": {
            "payload": {
                "aps" : {
                    "badge" : 4,
                    "alert" : {
                        "title" : "title IOS",
                        "body" : "Body IOS"
                    }
                }
            }
        },
        "data": {
            "article": "some article"
        }
    }
}
```

## BOTH

FCM end point:     
https://fcm.googleapis.com/v1/projects/{{your_FCM_project_ID}}/messages:send

```
{   
    "message": {
        "topic":"user_topic",
         "notification": {
            "title": "title generic",
            "body": "body generic"
        },
        "android": {
            "data": {
               "title": "title Android x",
               "body": "body andorid x",
               "article": "android article x",
               "count": "5",
               "click_action": "com.adobe.phonegap.push.background.MESSAGING_EVENT",
            }
        },
        "apns": {
            "payload": {
                "aps" : {
                    "badge" : 4,
                    "alert" : {
                        "title" : "title IOS",
                        "body" : "Body IOS"
                    }
                }
            }
        },
        "data": {
            "article": "some article XYZ "
        }   
    }
}
```
