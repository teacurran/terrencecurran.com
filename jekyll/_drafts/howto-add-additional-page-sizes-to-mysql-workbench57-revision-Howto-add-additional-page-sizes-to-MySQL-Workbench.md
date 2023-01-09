---
id: 58
title: 'Howto add additional page sizes to MySQL Workbench'
date: '2008-10-02T00:30:27-04:00'
author: Tea
layout: revision
guid: '/2008/10/02/57-revision/'
permalink: '/?p=58'
---

I've been following the progress of the [MySQL Workbench](http://dev.mysql.com/workbench/) project for quite some time now ever since the discontinuation of [DbDesigner4](http://www.fabforce.net/dbdesigner4/). For a while things appeared to be moving slowly and the early releases were painfully slow and hard to use, but with the most recent releases I feel that it is really ready for prime time. It isn't quite as powerful as some other commercial tools I use, but it is free, quick, and does a great job for small databases.

One of the things that I am really liking about MySql Workbench the most is it's solid design. I have been able to open up the source code and view a very nicely written application that very much appears to be designed for growth. Many of the key settings and customizations are even left out of the compiled code and read dynamically from XML files upon startup.

Recently I found that the tool didn't support some standard page sizes I use for printing out diagrams — most notably (to me anyway), Arch-E, the standard page size of the printer at my local FedEx Kinkos.

After only a few minutes of poking around I found a file in the data directory called paper\_types.xml that contained all of the paper sizes that the program would. A quick trip to [Wikipedia](http://en.wikipedia.org/wiki/Paper_size) and I was easily able to add my Arch-E paper type. After restarting the program I was easily to print directly to the printer as well as export to the correct size pdf.

Here's the code to add to save you (and probably myself later) some time:  
Add this to C:Program FilesMySQLMySQL Workbench 5.0 OSSdatapaper\_types.xml  
``