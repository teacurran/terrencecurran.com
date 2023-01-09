---
id: 125
title: 'Proxy your connections for debugging'
date: 2009-02-23 02:47:32
author: Tea
layout: revision
guid: '/2009/02/23/110-revision-8/'
permalink: '/?p=125'
---

One of the tricky things about having flash or ajax client applications that request data on their own is knowing what they are requesting and when. I went nuts today trying to figure out if my ajax was making the right calls and getting back data, 404 messages, or nothing at all. That was until i remembered Squid.

Squid is a simple proxy server used in the unix world for logging or filtering web content but it can be very handy as a desktop tool for debugging rich internet applications.

![](/img/entries/squidman_appicon.gif)  
Looking around, I found this great installer and GUI front end for Squid for OSX called [SquidMan](http://homepage.mac.com/adg/SquidMan/).

When you first launch SquidMan it will prompt you to install the Squid subsystem, just click OK enter your password and it will bring up the settings:

You can leave all of the settings as the default  
![](/img/entries/squidman_settings.png)

Then from the main dialog, click “Start Squid”  
![](/img/entries/squidman_main.png)

In firefox, find the network settings under the Advanced tab:  
![](/img/entries/squidman_firefox_settings.png)

Enter your local computer 127.0.0.1 as the proxy host:  
![](/img/entries/suidman_firefox_settings2.png)

This will now force all of your Firefox traffic to go through the squid proxy. From the main SquidMan application settings, you can now choose “Tools” and see a log of every URL that is requested by javascript or flash within your browser:  
![](/img/entries/squidman_log.png)