---
id: 358
title: 'Monty Widenius is trying to regain control of MySQL and why this is bad for OSS'
date: 2010-01-02 16:21:36
author: Tea
layout: revision
guid: '/2010/01/02/344-revision-14/'
permalink: '/?p=358'
---

One of the most widely discussed topics to go around the tech industry last year was the Oracle acquisition of Sun and what this meant for the MySQL database. This topic held up the merger with the US DOJ and currently has it stalled in the EU commission.

One of the primary forces behind these hold ups is a series of FUD articles written by Monty Widenius, the most recent just [a few days ago](http://monty-says.blogspot.com/2009/12/help-keep-internet-free.html). Monty has a huge following so whenever he writes up one of these articles it gets huge circulation and riles up the Slashdot and LAMP crowds.

I think that the open source community should be very skeptical about anything written by Monty on this topic, and should start looking at the big picture of what this merger means for themselves and the various players involved.

I don't know why I haven't been seeing many serious rebuttals to Michael's posts. I can only guess that is because everyone working at Sun and Oracle are prohibited from speaking up on the matter.

### Here is what I think everyone should consider:

**1. Sun is the largest contributor to Open Source in the world**

**2. Java, which sun is responsible for, one of the largest ecosystem of open source software in the world.**

IBM, RedHat, the Apache Foundation, Oracle, Google, and hundreds of other companies have based themselves on Java. Java is by far the most used platform out there today. Out of this wide adoption has sprung a massive open source ecosystem that can only be rivaled by Linux. I don't have any studies but I wouldn't be surprised if there was much more open source Java code out there than C.

The Java community in my experience, by and large, is very reluctant to touch anything that is not open source. In the past 10 years the community has moved from expensive application servers and IDEs to free alternatives. Projects like JBoss, Glassfish, Tomcat, Eclipse, and Netbeans are the dominant players in the space and have been driving the mindset that to be a player in this market you have to be free.

**3. Sun is in trouble and risks going out of business if no-one buys it. Talks with IBM broke down, and there aren't many other companies that can make a purchase.**

Not much else to say here. Oracle has been having some rough years. Hardware sales are down and they've been spending too much on R&amp;D. Sun needs someone to buy them and buy them quickly. They have been actively been doing layoffs that affect all of their open source efforts (including MySQL) while this drags out. **Further delays, or the blocking of this merger will only further harm the OSS Community.**

**4. Oracle already owns Berkely DB and InnoDB, which current versions of MySQL rely on.**

This same sort of noise and FUD was made years ago when Oracle bought these two products. Oracle has continued to maintain these and has been a more stable steward of the projects than when they were independent.

**5. It doesn't make business sense for Oracle to try to kill MySQL.**

First off – MySQL does not compete with Oracle Database. Anyone who thinks it does does not understand what Oracle Database is. People that use Oracle tend to buy the whole oracle package (DB, App Server, IDE, Middleware, etc..). There are free alternatives to everything in this stack, including many products owned by Oracle, but people that want oracle want the stack and they want the support that comes with the stack.

There are no CTOs out there hemming and hawing about wether to use MySQL or Oracle. It would be like sitting around and trying to decide if you were going to buy a Ford Focus or an M1 Abrams Tank. I'm not using this analogy to point out that Oracle has many more features (it does) or that it is better than MySQL, only that it is different. You would never buy the tank to commute to work or for most of your driving needs. The same is true with MySQL, it is perfect for most projects and Oracle tends to be a little too heavyweight.

Furthermore, for companies that do insist on purchasing the Oracle stack but want to use MySQL, Oracle would now be able to sell them a stack with MySQL in it. Oracle makes their money the same way as MySQL with support agreements, and people purchase MySQL just like Oracle. If a customer comes to them, what tod they care which database the customer wants to use when they own both.

The last thing Oracle would want to do is alienate a large developer community. Changing anything about MySQL would hugely upset not just the LAMP community but the Java community.

**6. All Oracle will own is a trademark and some engineers.**

The source code for MySQL is already free. Anyone can fork it off and start another project and attempt to gain community support around their new project. The only thing they can't do is call it MySQL. Monty has already started one such fork called MariaDB.

Open source projects about the community rallying around ideas, not around companies. Monty argues that a forked product could never compete with MySQL without the name recognition. This isn't true. If the community feels that Oracle is doing a bad job as a maintainer, but someone else is releasing new features on some other project, people will switch very quickly. We see this all the time in the Linux world with the community switching from one fork to another of a large project.

Monty says that forks can never happen because they would need funding and resources. What this argument ignores is that large companies with a lot invested in MySQL could step up if the project is faltering. If Oracle were to stop releasing updates, do you think Google is going to sit around and do nothing. The community would jump ship to GoogSQL or whatever if it came to that and was seen as a better product.

**6. Monty Widenius has the most to gain from Oracle divesting in MySQL.**

Like everything else in the world, when there is an argument, you need to step back and ask yourself who has the most to gain. Widenius sold MySQL for a hefty personal gain and is now trying to wrestle back control by spreading fear throughout the MySQL community.

Monty has been making noise since September 2008 (before the announced Oracle-Sun merger) and complaining about the direction of the project. He didn't feel Sun was doing a good job and started immediately calling for forks and and a change of direction. The community heard Widenius out but didn't build up a ton of support for his ideas, because by and large, most people were satisfies with the job Sun was doing.

Right before the Sun ownership, MySQL was in the process of rolling out a non-free enterprise edition and telling people that they would have to pay for new features. The company I was working for at the time had MySQL sales reps and consultants flat out tell us that we would need to purchase a support agreement if we wanted to use the Falcon Engine or clustering past v5.5. Sun put a stop to this.

### In Summary

I am not under any illusions that an Oracle-Sun merger would be all sunshine and roses. I think that Sun has developed a culture and business model around everything being open and free and Oracle has not. Oracle will need to make some big changes about how it does business in order for the merger to work.

I would prefer if Sun could remain an independent company but we have to face facts, Sun is in trouble and there aren't many other companies that can bail them out. If Sun is allowed to continue it's downward spiral then we are facing a great loss to the open source community.

I am not worried about the Oracle stewardship of any of Sun's open source products precisely because of the community support. Oracle can't afford to make huge changes and alienate hundreds of thousands of developers who have some say in how much money their companies give to Oracle. Doing something like killing or even changing GlassFish, VirtualBox, ZFS, or any other OSS project could lead to less sales in it's existing stack of software.