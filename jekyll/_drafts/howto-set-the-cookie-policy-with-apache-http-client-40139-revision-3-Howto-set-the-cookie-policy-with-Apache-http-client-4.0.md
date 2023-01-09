---
id: 142
title: 'Howto set the cookie policy with Apache http client 4.0'
date: '2009-03-29T19:58:58-04:00'
author: Tea
layout: revision
guid: '/2009/03/29/139-revision-3/'
permalink: '/?p=142'
---

The [Apache Http Components client](http://hc.apache.org) changed quite a bit from 3.0 to 4.0 beta. It wasn't entirely clear to me from the documentation how to set request headers and cookie policies with the new client. After a lot of fishing around I was able to figure it out, here is the code for anyone trying to do the same thing.

Downloading a page with the 3.0 client:

```java
"http://www.twitter.com/teacurran"<span style="color: #66cc66;">)</span>;
 
<span style="color: #808080; font-style: italic;">// set a faux User-agent</span>
<span style="color: #ff0000;">"User-Agent"</span>, <span style="color: #ff0000;">"Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.0; .NET CLR 1.1.4322)"</span><span style="color: #66cc66;">)</span>;
 
<span style="color: #808080; font-style: italic;">// set the cookie policy</span>
 
```

here is the same thing with the 4.0 client:

```java
"http://www.twitter.com/teacurran"<span style="color: #66cc66;">)</span>;
 
<span style="color: #808080; font-style: italic;">// set a faux User-agent</span>
get.<span style="color: #006600;">addHeader</span><span style="color: #66cc66;">(</span><span style="color: #ff0000;">"User-Agent"</span>, <span style="color: #ff0000;">"Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.0; .NET CLR 1.1.4322)"</span><span style="color: #66cc66;">)</span>;
 
<span style="color: #808080; font-style: italic;">// set the cookie policy</span>
 
```