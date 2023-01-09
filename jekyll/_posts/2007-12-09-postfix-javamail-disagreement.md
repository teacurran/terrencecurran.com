---
id: 7
title: 'Postfix + Javamail = disagreement'
date: 2007-12-09 01:30:54
author: Tea
layout: post
guid: '/2007/12/09/postfix-javamail-disagreement/'
permalink: /2007/12/09/postfix-javamail-disagreement/
dsq_thread_id:
    - '478094746'
categories:
    - java
    - linux
---

I had a server die on me last week and I needed to reinstall it as quickly as possible. It was running Fedora Core 4. I only had install media for Fedora core 6. I knew it would be a bit of a pain to update all of the config files for everything running on the server, but I figured now is as good a time as any. I would have updated to 7 or 8, but I didn't have time to download those on CDs (I have 8 on dvd but the server doesn't have a dvd drive).

Anyway. I updated everything and it all seemed to run swimmingly. I didn't even have to configure anything too drastically different. I switched from Courier IMAP to Dovecot, but that is another story.

The issue that got me pulling my hair out last night was that my tomcat log kept showing odd smtp related error messages in the stack trace:

```php
 
```

After a lot of digging, it seems that javamail sends the RET parameter as described in [RFC-1891](http://www.ietf.org/rfc/rfc1891.txt), even if it is not set up in the config file. Since this is an optional parameter, you would think that leaving it out of your properties file would make javamail not send it to the mail server. It seems it sends “RET=” rather than leaving it out.

It also seems that postfix v2.2.2 ignores “RET=”, but v2.3.3 is a little more strict and expects your parameter to have a value.

I don't know what application is behaving improperly here. My guess is that postfix is doing the right thing, and that javamail should probably not send the RET parameter, but I guess they could argue that I just need to always configure it in my settings to make sure I'm compliant. (I am using javamail 1.3.0 btw, so it may have changed in newer versions)

to fix the problem, all I had to do was add these two lines to my javamail config properties file:  
mail.smtp.dsn.ret=HDRS  
mail.smtp.dsn.notify=NEVER

I found I also had to set the mail.smtp.dns.notify value too, because if I don't I get this error:

```php
 
```

It looks like javamail sends that along as blank as well. weird.