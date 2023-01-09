---
id: 145
title: 'Picture Pump'
date: '2009-04-06T05:21:01-04:00'
author: Tea
layout: post
guid: '/?p=145'
permalink: /2009/04/06/picture-pump/
aktt_notify_twitter:
    - 'no'
dsq_thread_id:
    - '475444276'
categories:
    - java
    - web
tags:
    - java
    - jnlp
---

About five years ago [Ben Sisto](http://www.51570.org/) had an idea for an application that I thought would be useful. The idea being that if you want to download images from Google image search — it takes forever to go through the results, wait for them to load, and save the images that aren't 404. The application Ben envisioned, would simply download every result and ignore the ones that were 404 or took too long to load. Once you have all the results on your hard drive it is a lot easier to sift through them.

I quickly banged out a release that was workable in a few days and never really looked at it again.

This week I had an exact need for this application again. When I fired it up, it seems Google changed their site so it wasn't working anymore. I spent some time tonight to fix it up and got it working much better than the original.

So here it is. v1.0 (i guess) release of Picture Pump (named after the site Ben ran at the time – HoneyPump):

![](/img/entries/PicturePump_screenshot.png)

Click launch to start/install the application. OSX users should be all set, windows users you might have to [get java](http://www.java.com) first.

[![](/img/webstart_button.gif)](/apps/PicturePump/launch.jnlp)

also, hey look. [source code](/apps/PicturePump/picturepump.zip)

Email me with any suggestions or patches.

**UPDATE: 10/24/2009**  
– fixed my mime settings so that launch button works again (sorry moved servers and forgot to set it)  
– fixed a few bugs  
– added support for safe search  
– added filtering by image type and license  
– source code is now under the [Apache Public 2.0](http://en.wikipedia.org/wiki/Apache_License)