﻿#pragma checksum "C:\Users\vxadmin\Documents\MP\KMEDIA\FUCS\fucsapp\platforms\wp8\Plugins\org.apache.cordova.dialogs\NotificationBox.xaml" "{406ea660-64cf-4c82-b6f0-42d48172a799}" "DDFD84B5BFB1543C5AF2FA01C7F3F258"
//------------------------------------------------------------------------------
// <auto-generated>
//     Este código fue generado por una herramienta.
//     Versión de runtime:4.0.30319.34014
//
//     Los cambios en este archivo podrían causar un comportamiento incorrecto y se perderán si
//     se vuelve a generar el código.
// </auto-generated>
//------------------------------------------------------------------------------

using System;
using System.Windows;
using System.Windows.Automation;
using System.Windows.Automation.Peers;
using System.Windows.Automation.Provider;
using System.Windows.Controls;
using System.Windows.Controls.Primitives;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Ink;
using System.Windows.Input;
using System.Windows.Interop;
using System.Windows.Markup;
using System.Windows.Media;
using System.Windows.Media.Animation;
using System.Windows.Media.Imaging;
using System.Windows.Resources;
using System.Windows.Shapes;
using System.Windows.Threading;


namespace WPCordovaClassLib.Cordova.UI {
    
    
    public partial class NotificationBox : System.Windows.Controls.UserControl {
        
        internal System.Windows.Controls.Grid LayoutRoot;
        
        internal System.Windows.Controls.Grid TitlePanel;
        
        internal System.Windows.Controls.TextBlock PageTitle;
        
        internal System.Windows.Controls.ScrollViewer ContentScroller;
        
        internal System.Windows.Controls.TextBlock SubTitle;
        
        internal System.Windows.Controls.TextBox InputText;
        
        internal System.Windows.Controls.StackPanel ButtonPanel;
        
        private bool _contentLoaded;
        
        /// <summary>
        /// InitializeComponent
        /// </summary>
        [System.Diagnostics.DebuggerNonUserCodeAttribute()]
        public void InitializeComponent() {
            if (_contentLoaded) {
                return;
            }
            _contentLoaded = true;
            System.Windows.Application.LoadComponent(this, new System.Uri("/com.kmedia.fucs;component/Plugins/org.apache.cordova.dialogs/NotificationBox.xam" +
                        "l", System.UriKind.Relative));
            this.LayoutRoot = ((System.Windows.Controls.Grid)(this.FindName("LayoutRoot")));
            this.TitlePanel = ((System.Windows.Controls.Grid)(this.FindName("TitlePanel")));
            this.PageTitle = ((System.Windows.Controls.TextBlock)(this.FindName("PageTitle")));
            this.ContentScroller = ((System.Windows.Controls.ScrollViewer)(this.FindName("ContentScroller")));
            this.SubTitle = ((System.Windows.Controls.TextBlock)(this.FindName("SubTitle")));
            this.InputText = ((System.Windows.Controls.TextBox)(this.FindName("InputText")));
            this.ButtonPanel = ((System.Windows.Controls.StackPanel)(this.FindName("ButtonPanel")));
        }
    }
}

