---
id: 139
title: 'Howto set the cookie policy with Apache http client 4.0'
date: '2009-03-29T19:59:04-04:00'
author: Tea
layout: post
guid: '/?p=139'
permalink: /2009/03/29/howto-set-the-cookie-policy-with-apache-http-client-40/
dsq_thread_id:
    - '475444262'
categories:
    - java
tags:
    - 'httpcomponents java'
---

The [Apache Http Components client](http://hc.apache.org) changed quite a bit from 3.0 to 4.0 beta. It wasn't entirely clear to me from the documentation how to set request headers and cookie policies with the new client. After a lot of fishing around I was able to figure it out, here is the code for anyone trying to do the same thing.

Downloading a page with the 3.0 client:

```java
"http://www.twitter.com/teacurran");
 
// set a faux User-agent
"User-Agent", "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.0; .NET CLR 1.1.4322)");
 
// set the cookie policy
 
```

here is the same thing with the 4.0 client:

```java
"http://www.twitter.com/teacurran");
 
// set a faux User-agent
get.addHeader("User-Agent", "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.0; .NET CLR 1.1.4322)");
 
// set the cookie policy
 
```