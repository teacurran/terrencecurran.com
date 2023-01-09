---
id: 527
title: 'IE Javascript not working'
date: 2010-01-29 09:29:21
author: Tea
layout: revision
guid: '/2010/01/29/449-revision/'
permalink: '/?p=527'
---

I had some javascript that I couldn't get to run in IE. It was driving me nuts. I spent a few hours slowly reading every line to make sure there were no stray commas or anything else IE doesn't like.

After two wasted hours, I went to twitter.com, and it kindly informed me that javascript was disabled.

Except it wasn't.

Another half an hour of google searching and I find out that I need to re-register the javascript dll.

Run this command from the start menu or command dialog if this happens to you:  
regsvr32.exe jscript.dll

Windows is so dumb.