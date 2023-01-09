---
id: 462
title: 'Java Keystore Import on OSX Leopard'
date: '2010-03-17T11:21:48-04:00'
author: Tea
layout: revision
guid: '/2010/03/17/460-revision-2/'
permalink: '/?p=462'
---

This morning I needed to connect IDE (IntelliJ Idea) to a FishEye/Jira server that had a self signed security certificate. Since IntelliJ (or at least the Atlassian plugin) uses Java to connect to https, it fails because of the JVM's strict security checking.

Normally when this happens, it is just a matter of installing the certificate into the JVM keystore. There is an article and code that does this for you [here](http://blogs.sun.com/andreas/entry/no_more_unable_to_find). [This blog post](http://louise.hu/poet/?p=3069) even has a nice bash wrapper that will download and compile this code for you on OSX.

When I tried to do this today, I got this error every time I tried to run this tool:

```php
 
```

After a lot of digging on google. I finally found the problem.

On Java for OSX 10.6 u1 and 10.5 u6, Apple changed the default keystore password from **‘changeit'** to **‘changeme'.**

Such a trivial change, but annoying