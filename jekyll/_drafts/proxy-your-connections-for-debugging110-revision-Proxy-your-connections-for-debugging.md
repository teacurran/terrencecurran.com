---
id: 111
title: 'Proxy your connections for debugging'
date: 2009-02-20 19:08:54
author: Tea
layout: revision
guid: '/2009/02/20/110-revision/'
permalink: '/?p=111'
---

One of the tricky things about having flash or ajax client applications that request data on their own is knowing what they are requesting and when. I went nuts today trying to figure out if my ajax was making the right calls and getting back data, 404 messages, or nothing at all. That was until i remembered Squid.

Squid is a simple proxy server used in the unix world for logging or filtering web content but it can be very handy as a desktop tool for debugging rich internet applications.

Looking around, I found this great installer and GUI front e