cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.apache.cordova.device/www/device.js",
        "id": "org.apache.cordova.device.device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.dialogs/www/notification.js",
        "id": "org.apache.cordova.dialogs.notification",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.dialogs/www/android/notification.js",
        "id": "org.apache.cordova.dialogs.notification_android",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "file": "plugins/com.phonegap.plugins.Puship/www/PushNotification.js",
        "id": "com.phonegap.plugins.Puship.PushNotification",
        "clobbers": [
            "PushNotification"
        ]
    },
    {
        "file": "plugins/com.phonegap.plugins.Puship/www/PushipNotification.js",
        "id": "com.phonegap.plugins.Puship.PushipNotification",
        "clobbers": [
            "PushipNotification"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "org.apache.cordova.device": "0.3.0",
    "org.apache.cordova.geolocation": "0.3.12",
    "org.apache.cordova.console": "0.2.13",
    "org.apache.cordova.dialogs": "0.3.0",
    "com.phonegap.plugins.Puship": "1.0.0"
}
// BOTTOM OF METADATA
});