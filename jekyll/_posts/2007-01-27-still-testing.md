---
id: 3
title: 'Still Testing'
date: 2007-01-27 16:59:23
author: Tea
layout: post
guid: 'http://wirelust.com/blog/2007/06/08/still-testing/'
permalink: /2007/01/27/still-testing/
dsq_thread_id:
    - '672299485'
categories:
    - Uncategorized
---

I'm still testing out b2evolution. I have to say that I like the UI a lot better than my old blog but some things still seem a little wonky. I feel like there should be plugins out there for things like tagging and digg linkers, but I can't find anything. Maybe if I feel ambitious I will look into contributing rather than just whining about it.

The actual reason for this post is I wanted to test out the [cGeshi plugin](http://www.blog.cingusoft.com/index.php/all/2006/11/25/cgeshi_highlight_code_with_geshi) for syntax highlighting. Making sure I can post code that looks nice is going to be essential to this blog working for me.

Here Goes:

```java
import javax.servlet.ServletContext;
import javax.servlet.ServletContextEvent;
 
<span style="color: #808080; font-style: italic;">/**
* User: Tea Curran
* Date: Jan 26, 2007
* Time: 1:37:53 AM
* Desc:
*/</span>"application"
```

Word. works well and was super painless. I just had to adjust a little CSS to make the code not word wrap and we are in business. I may make the whole site wider so I can post cleaner code and bigger images.

In fact, this worked so well I think I might edit my WebSVN installation later on to use geshi instead of enscript. The enscript highlighting is great but seems to be lacking a lot of languages, is hard to add languages, and I can't find a definitive page where new releases are hosted.

Update:  
I ended up ditching b2evolution. I don't remember why, but this site is now wordpress and using the [GeShi wordpress plugin](http://www.thedevproject.com/projects/wordpress-geshi-plugin/). It doesn't seem to play nice with the wp visual editor, but that thing was dumb anyhow.