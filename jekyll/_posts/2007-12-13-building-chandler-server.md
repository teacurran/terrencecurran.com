---
id: 18
title: 'Building Chandler Server'
date: 2007-12-13 17:19:07
author: Tea
layout: post
guid: '/2007/12/13/building-chandler-server/'
permalink: /2007/12/13/building-chandler-server/
dsq_thread_id:
    - '555401570'
categories:
    - java
---

I've been using [Chandler](http://chandlerproject.org/) for a few weeks now to try to organize my life.

I tried building Chandler Server from source today. Following the [instructions](http://chandlerproject.org/Developers/ChandlerServerSource) on their site give's me a build error because it can't find a copy of [Apache Abdera](http://incubator.apache.org/abdera/)

Some of the error:

```php
 
```

After much fiddeling around, and even trying to install Abdera from source, I was able to get it to build by checking out everything related to cosmo and building that.

- svn co http://svn.osafoundation.org/server/cosmo/trunk
- cd trunk/cosmo
- mvn package

ta-da.

I still get some errors with the unit tests, but I don't know if those are serious or not yet.

Now let's see if it run's with Tomcat 6.0