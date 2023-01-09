---
id: 83
title: 'Technoloy Update'
date: 2008-11-20 02:27:57
author: Tea
layout: revision
guid: '/2008/11/20/80-revision-3/'
permalink: '/?p=83'
---

reposted from my lj.

Making lists sure helps me put things in perspective, so I thought I should make a list of technologies I've been working or playing with lately so I can sort of make a stamp in the sand for the end of the year. I doubt many people will care, but here is what I've been doing technology wise:

### Java:

**[JBoss Seam](http://www.seamframework.org/)**: It's a bit of a shift going from request based applications to conversation based applications, and bijection is tough to wrap your head around mentally, but I've been liking Seam a lot. I am able to get the robustness and enterprise features of J2EE with the speed of development frameworks like Ruby on Rails offer.

**[GlassFish](https://glassfish.dev.java.net/)**: As much as I've been liking Seam, I still sort of hate JBoss — it is hard to configure and the default settings aren't what I think they should be. GlassFish works the first time out of the box and is a dream to configure.

**[JPA](http://en.wikipedia.org/wiki/Java_Persistence_API)**: I can't say JPA is any better than Hibernate Annotations (I think it is a little lacking compared to HA), but it seems to be where the industry is going and I think it is still way better than most persistence frameworks that have come out and it is nice to finally have a good standard.

**[Hudson](https://hudson.dev.java.net/)**: Hudson is a very nice easy to use continuous integration server. that is all you need to know.

**[Maven](http://maven.apache.org/)**: Hate it. I spend more time trying to configure maven than actually writing code.

### Javascript:

**[YUI](http://developer.yahoo.com/yui/)**: There are a ton of javascript libraries out there and I have traditionally gone the prototype/scriptalicious route, but lately I've been using the Yahoo User Interface. It is very easy to use, looks nice, and has a ton of widgets.

**[Cappuccino](http://cappuccino.org/)**: this is very new and somewhat limited right now. What I like about this framework is: first that they made it look and act a lot like Objective-C. For someone who has done any Objective-C work it is very easy to get up and running writing code. The second thing that they have done, and I think this is more important, is to build a front end framework that starts and stops a browser application in a similar way to how a desktop application is started and stopped. Cappuccino works a lot like GWT or Flex and frees you a lot from thinking about web apps in terms of request and response. It lets you just get down and write an application. I think it's still a little lacking in features and widgets, but I'm sure those will come soon.

**[Rich Faces](http://www.jboss.org/jbossrichfaces/)**: Ships with Seam but is developed independently and not required to go with seam. Their widget library is robust and works very smooth. Still missing a few widgets and doesn't integrate well with other frameworks but it seems promising.

### Flash:

**[MDM Zinc](http://www.multidmedia.com/)**: I started working with Zinc because Adobe AIR can't be bundled with a distributed application. I've been very into it and done a few very cool simple applications. The brick walls I have been hitting that prevent me from using this a ton more are mostly Flash limitations, most noticeably the inability to build a multi-threaded application. With a heavy networked app, I can get it to run 20 times faster with a threaded Java application than with straight actionscript. MDM allows you to thread through custom extenstions but the extensions have to be written in C++, easy in Windows but annoyingly difficult in OSX.

**[Five 3D](http://five3d.mathieu-badimon.com/)**: I've been playing around with a lot of 3D frameworks. I like Five 3d the most for the type of stuff I've been doing because it treats all text as vector, rather than raterising like Sandy or PaperVision do. I have some disagreements the the way the core of the framework is written and changed a few things to be more Object Oriented and streamlined, but performance is still killing me. Supposedly Adobe is adding similar 3d stuff to Flash 10, but I haven't tried it yet to see.

## Mobile:

**IPhone – Cocoa Touch**: I started a few demo applications that I was very excited about for a few weeks. Since then I have been waiting for Apple for approval (permission) to test my applications on my phone. It's totally annoying that I can't even check the status of my application or have an expectation as to when I will get approved.

**Android**: I like android's platform and SDK slightly better than IPhone but there are a few things that I think will keep me from being serious about it for a while:  
1\. I don't own an android phone and am not anxious to shell out for another new phone  
2\. The G1 sucks hardware wise compared to an iPhone, it looks similar on paper but needs a hard drive, better form factor, and generally a bump in the numbers.  
3\. MultiTouch missing and probably not coming anytime soon.

### Software:

**[Nagios](http://www.nagios.org/)**: I set up Nagios for monitoring the 10+ servers I am responsible for. I was resisting for a long time because I don't like that it has a single point of failure — it assumes the server running nagios has 100% uptime — but I finally gave in and it has been working fairly well.

**[Komodo Edit](http://www.activestate.com/Products/komodo_ide/komodo_edit.mhtml)**: After 10 years, Komodo edit is finally slowly replacing my default general text editor on Windows. I still like textmate on OSX better, but Komodo is working pretty awesome and performs identical on all platforms.

**[Enterprise Architect](http://www.sparxsystems.com.au/)**: I've struggled for years with a mix of modeling software. I've used everything including [Rational Rose](http://www-01.ibm.com/software/rational/), [Visio](http://www.microsoft.com), [AggroUML](http://argouml.tigris.org/), and [OmniGraffle](http://www.omnigroup.com); often times using more than one program for a single project. I dove in early this year and tried using Enterprise Architect for everything and for once I have a tool that I feel is 90% of the way there. The other 10% is probably just me being stubborn. At just over $200, it is a total bargain and offers a very similar feature set to Rational Rose. If you do any UML, system, or database design, it is worth a try.

### Databases:

**MySQL**: I bought all marketing over the past few years and thought MySQL was totally up to speed with SQL Server and Oracle in terms of speed and reliability. For the most part MySQL has performed very well for me and any new projects I do in MySQL. My beef lately is that the engine still isn't nearly as awesome as Sql Server or Oracle in terms of parallelism, online indexing, and preventing locks. Once you get up to 100,000,000 rows or so you start to have to do all sorts of hacks to operate on large sets of rows within a single query – otherwise it locks the entire database. I am not that far into my first major MySQL project and maybe I will learn some easy tricks to get past the limitations, but I haven't seen any magic bullets yet.

### Stuff to hopefully try soon:

**Cocoa Touch on Actual Hardware**: Hopefully I will get approval from apple soon and be able to finally test some apps on my phone.

**[Granite Data Services](http://www.graniteds.org)**: JBoss Seam + Adobe Flex = Free alternative to Adobe LifeCycle Data Services. looks pretty rad.

**[JMaki](https://ajax.dev.java.net/)**: More Ajax stuff with some interesting demos.

**[Django](http://www.djangoproject.com/)**: This shit is all the hype so I gotta see what it is about. Looks like RoR without the annoying community. Plus you can deploy to Google AppEngine.