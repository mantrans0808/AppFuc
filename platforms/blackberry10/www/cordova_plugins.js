cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
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
    },
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
        "file": "plugins/org.apache.cordova.dialogs/www/blackberry10/beep.js",
        "id": "org.apache.cordova.dialogs.beep",
        "clobbers": [
            "window.navigator.notification.beep"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.geolocation/www/blackberry10/GeolocationProxy.js",
        "id": "org.apache.cordova.geolocation.GeolocationProxy",
        "runs": true
    },
    {
        "file": "plugins/org.apache.cordova.geolocation/www/Coordinates.js",
        "id": "org.apache.cordova.geolocation.Coordinates",
        "clobbers": [
            "Coordinates"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.geolocation/www/PositionError.js",
        "id": "org.apache.cordova.geolocation.PositionError",
        "clobbers": [
            "PositionError"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.geolocation/www/Position.js",
        "id": "org.apache.cordova.geolocation.Position",
        "clobbers": [
            "Position"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.geolocation/www/geolocation.js",
        "id": "org.apache.cordova.geolocation.geolocation",
        "clobbers": [
            "navigator.geolocation"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.phonegap.plugins.Puship": "1.0.0",
    "org.apache.cordova.console": "0.2.13",
    "org.apache.cordova.device": "0.3.0",
    "org.apache.cordova.dialogs": "0.3.0",
    "org.apache.cordova.geolocation": "0.3.12"
}
// BOTTOM OF METADATA
});