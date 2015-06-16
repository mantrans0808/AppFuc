/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        
        console.log("Cordova listo!!");

        var Puship = window.plugins.puship;
        Puship.EnableLog = true;
        // ID DEL APP EN PUSHIP
        Puship.PushipAppId = "ZDZ7C0Czx794krq"; // I.E.: puship_id = "h1mCVGaP9dtGnwG"

        if (Puship.Common.GetCurrentOs()==Puship.OS.ANDROID){
            var GCMCode = "654011467087"; // This is the senderID provided by Google. I.E.: "28654934133"
            Puship.GCM.Register(GCMCode,
            {
                successCallback: function (pushipresult){
                    // navigator.notification.alert("device registered with DeviceId:" + pushipresult.DeviceId);
                    // console.log("device registered with DeviceId:" + pushipresult.DeviceId);
                },
                failCallback: function (pushipresult){
                    //navigator.notification.alert("error during registration: "+ JSON.stringify(pushipresult));
                    // console.log("error during registration: "+ JSON.stringify(pushipresult));
                }
            });
        } else if (Puship.Common.GetCurrentOs()==Puship.OS.IOS){
            Puship.APNS.Register(
            {
                successCallback: function (pushipresult){
                    // navigator.notification.alert("device registered with DeviceId:" + pushipresult.DeviceId);
                    // console.log("device registered with DeviceId:" + pushipresult.DeviceId);
                },
                failCallback: function (pushipresult){
                    // navigator.notification.alert("error during registration: "+ JSON.stringify(pushipresult));
                    // console.log("error during registration: "+ JSON.stringify(pushipresult));
                }
            });
        } else if (Puship.Common.GetCurrentOs()==Puship.OS.WP){
            Puship.WP.Register(
            {
                successCallback: function (pushipresult){
                    // navigator.notification.alert("device registered with DeviceId:" + pushipresult.DeviceId);
                    // console.log("device registered with DeviceId:" + pushipresult.DeviceId);
                },
                failCallback: function (pushipresult){
                    // navigator.notification.alert("error during registration: "+ JSON.stringify(pushipresult));
                    // console.log("error during registration: "+ JSON.stringify(pushipresult));
                }
            });
        } else {
            // Console.log("Not supported platform");
        }

        Puship.Common.OnPushReceived(function(event) {
            
            // console.log('push received');
            
            try
            {
                // alert(event.notification.Alert);
                location.href = "Novedades.html";
            }
            catch(err)
            {
                // console.warn("Cannot display alert in background");
            }
        });

    }
};

app.initialize();