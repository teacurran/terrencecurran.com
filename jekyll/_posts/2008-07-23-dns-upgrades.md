---
id: 36
title: 'DNS Upgrades'
date: '2008-07-23T01:41:10-04:00'
author: Tea
layout: post
guid: '/?p=36'
permalink: /2008/07/23/dns-upgrades/
dsq_thread_id:
    - '676043757'
categories:
    - linux
---

I just spent the night updating all of my DNS servers because of the [flaw that was released today](http://blog.wired.com/27bstroke6/2008/07/details-of-dns.html). I had thought I could put it off for a few more days and have time to prepare, but that can never be the case.

One of my annoyances with patching Linux, and Bind in particular is that every time I do an upgrade it seems to break something, today is no exception. I patched three fedora core 9 systems, and some version of Cent OS without any problems.

Updating a FC6 system is where the fun came in — I immediately started getting this error on startup:

```php
 
```

It took a few hours of googling to find a solution, but it turns out that somewhere between the previous version and this new one (31:9.3.4-8.P1.fc6) it defaults to a chroot configuration..

The fix was to simply copy all of my zone files from:  
/var/named/zones/

to the folder:  
/var/named/chroot/var/named/zones