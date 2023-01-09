---
id: 346
title: 'Monty Widenius is trying to regain control of MySQL and why this is bad for OSS'
date: 2010-01-02 15:04:06
author: Tea
layout: revision
guid: '/2010/01/02/344-revision-2/'
permalink: '/?p=346'
---

One of the most widely discussed topics to go around the tech industry last year was the Oracle acquisition of Sun and what this meant for the MySQL database. This topic held up the merger with the US DOJ and currently has it stalled in the EU commission.

One of the primary forces behind these hold ups is a series of FUD articles written by Monty Widenius, the most recent just [a few days ago](http://monty-says.blogspot.com/2009/12/help-keep-internet-free.html). Monty has a huge following so whenever he writes up one of these articles it gets huge circulation and riles up the Slashdot and LAMP crowds.

I think that the open source community should be very skeptical about anything written by Monty on this topic, and should start looking at the big picture of what this merger means for them.

Consider these points:

**1. Sun is the largest contributor to Open Source in the world**

**2. Java, which sun is responsible for, one of the largest ecosystem of open source software in the world.**  
IBM, RedHat, the Apache Foundation, Oracle, Google, and hundreds of other companies have based themselves on Java. Java is by far the most used platform out there today. Out of this wide adoption has sprung a massive open source ecosystem that can only be rivaled by Linux. I don't have any studies but I wouldn't be surprised if there was much more open source Java code out there than C.

The Java community in my experience, by and large, is very reluctant to touch anything that is not open source. In the past 10 years the community has moved from expensive application servers and IDEs to free alternatives. Projects like JBoss, Glassfish, Tomcat, Eclipse, and Netbeans are the dominant players in the space and have been driving the mindset that to be a player in this market you have to be free.

**3. Sun is in trouble and risks going out of business if no-one buys it. Talks with IBM broke down, and there aren't many other companies that can make a purchase.**  
Not much else to say here. Oracle has been having some rough years. Hardware sales are down and they've been spending too much on R&amp;D. Sun needs someone to buy them and buy them quickly. They have been actively been doing layoffs that affect all of their open source efforts (including MySQL) while this drags out.

**4. Oracle already owns Berkely DB and InnoDB, which current versions of MySQL rely on.**  
This same sort of noise and FUD was made years ago when Oracle bought these two products. Oracle has continued to maintain these and has been a more stable steward of the projects than when they were independent.

**5. It doesn't make any sense for Oracle to try to kill MySQL.**  
First off – MySQL does not compete with Oracle Database. Anyone who thinks it does does not understand what Oracle Database is. People that use Oracle tend to buy the whole oracle package (DB, App Server, IDE, Middleware, etc..). There are free alternatives to everything in this stack, including many products owned by Oracle, but people that want oracle want the stack and they want the support that comes with the stack.

There are no CTOs out there hemming and hawing about wether to use MySQL or Oracle. It would be like sitting around and trying to decide if you were going to buy a Ford Focus or an M1 Abrams Tank. I'm not using this analogy to point out that Oracle has many more features (it does) or that it is better than MySQL, only that it is different. You would never buy the tank to commute to work or for most of your mobile needs. The same is true with MySQL, it is perfect for most projects and Oracle tends to be a little too heavyweight.

**6. All Oracle owns is a trademark and some engineers.**  
The source code for MySQL is already free. Anyone can fork it off and start another project and attempt to gain community support around their new project. The only thing they can't do is call it MySQL. Monty has already started one such fork called MariaDB.

Open source projects about the community rallying around ideas, not around companies. Monty argues that a forked product could never compete with MySQL without the name recognition. This isn't true. If the community feels that Oracle is doing a bad job as a maintainer, but someone else is releasing new features on some other project, people will switch very quickly. We see this all the time in the Linux world with the community switching from one fork to another of a large project.

**6. Monty Widenius has the most to gain from Oracle divesting in MySQL.**  
Like everything else in the world, when there is an argument, you need to step back and ask yourself who has the most to gain. W

Monty has been going around for years (long before the announced Oracle-Sun merger) and trying to get people to rally around his company rather than Sun. Unfortunately, the world wasn't giving him much attention because Sun was a great maintainer of MySQL and the community was better off with it's ownership. Right before the Sun ownership, MySQL was in the process of rolling out a non-free enterprise edition and telling people that they would have to pay for new features. Sun put a stop to this.