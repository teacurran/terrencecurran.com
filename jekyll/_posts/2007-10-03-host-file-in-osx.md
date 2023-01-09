---
id: 15
title: 'Host file in OSX'
date: '2007-10-03T01:37:46-04:00'
author: Tea
layout: post
guid: '/2007/10/03/host-file-in-osx/'
permalink: /2007/10/03/host-file-in-osx/
dsq_thread_id:
    - '697416140'
categories:
    - apple
---

I just spent a few hours trying to figure out why modifications to my /etc/hosts file weren't working in OSX.

a google search found this article:  
[Mac OS X hosts File Regrouped](http://www.macwrite.com/critical-mass/mac-os-x-hosts-file-regrouped)

which had some great tips on how to get lookupd to do exactly what I wanted. Being able to set up the host name lookup search order has been hugely helpful in debuggins some errors I have had in the past.

It turns out that this particular problem was that my host file had been generated from a build script that was written for windows. It seems that if you have any windows line returns in the file, lookupd will ignore the entire hosts file.

a quick install of dos2unix from [Darwin Ports](http://darwinports.com/) fixed the issue.