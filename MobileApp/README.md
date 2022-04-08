# MESSAGE PAYLOADS

## ANDROID ONLY

https://fcm.googleapis.com/v1/projects/{{your FCM project ID}}/messages:send

Note: if you want to open the app and get the event:    
**"click_action": "com.adobe.phonegap.push.background.MESSAGING_EVENT"**    
is needed on android

```
{
    "message": {
        "topic":"user_topic",
        "android": {
            "notification":  {
                "title": "title Android",
                "body": "body andorid",
                "click_action": "com.adobe.phonegap.push.background.MESSAGING_EVENT"
            },
            "data": {
               "article": "android article"
            }
        }
    }
}
```

## IOS ONLY

https://fcm.googleapis.com/v1/projects/{{your FCM project ID}}/messages:send

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

https://fcm.googleapis.com/v1/projects/{{your FCM project ID}}/messages:send

```
{
    "message": {
        "topic":"user_topic",
         "notification": {
            "title": "title generic",
            "body": "body generic"
        },
        "android": {
            "notification": {
                "title": "title Android",
                "body": "body andorid",
                "click_action": "com.adobe.phonegap.push.background.MESSAGING_EVENT"
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