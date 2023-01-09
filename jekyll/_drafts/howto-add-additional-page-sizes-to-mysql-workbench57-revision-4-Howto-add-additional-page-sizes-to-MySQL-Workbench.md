---
id: 86
title: 'Howto add additional page sizes to MySQL Workbench'
date: '2008-10-02T00:32:39-04:00'
author: Tea
layout: revision
guid: '/2008/10/02/57-revision-4/'
permalink: '/?p=86'
---

I've been following the progress of the [MySQL Workbench](http://dev.mysql.com/workbench/) project for quite some time now ever since the discontinuation of [DbDesigner4](http://www.fabforce.net/dbdesigner4/). For a while things appeared to be moving slowly and the early releases were painfully slow and hard to use, but with the most recent releases I feel that it is really ready for prime time. It isn't quite as powerful as some other commercial tools I use, but it is free, quick, and does a great job for small databases.

One of the things that I am really liking about MySql Workbench the most is it's solid design. I have been able to open up the source code and view a very nicely written application that very much appears to be designed for growth. Many of the key settings and customizations are even left out of the compiled code and read dynamically from XML files upon startup.

Recently I found that the tool didn't support some standard page sizes I use for printing out diagrams — most notably (to me anyway), Arch-E, the standard page size of the printer at my local FedEx Kinkos.

After only a few minutes of poking around I found a file in the data directory called paper\_types.xml that contained all of the paper sizes that the program would. A quick trip to [Wikipedia](http://en.wikipedia.org/wiki/Paper_size) and I was easily able to add my Arch-E paper type. After restarting the program I was easily to print directly to the printer as well as export to the correct size pdf.

Here's the code to add to save you (and probably myself later) some time:  
Add this to C:Program FilesMySQLMySQL Workbench 5.0 OSSdatapaper\_types.xml

```xml
<span style="font-weight: bold; color: black;"><value type="object" struct-name="app.PaperType" id="com.mysql.wb.papertype.archa"></span>
      <span style="font-weight: bold; color: black;"><value type="string" key="name"></span>Arch-A<span style="font-weight: bold; color: black;"></value<span style="font-weight: bold; color: black;">></span></span>
      <span style="font-weight: bold; color: black;"><value type="string" key="caption"></span>Arch A (9 in x 12 in.)<span style="font-weight: bold; color: black;"></value<span style="font-weight: bold; color: black;">></span></span>
      <span style="font-weight: bold; color: black;"><value type="real" key="width"></span>228.6<span style="font-weight: bold; color: black;"></value<span style="font-weight: bold; color: black;">></span></span>
      <span style="font-weight: bold; color: black;"><value type="real" key="height"></span>304.8<span style="font-weight: bold; color: black;"></value<span style="font-weight: bold; color: black;">></span></span>
    <span style="font-weight: bold; color: black;"></value<span style="font-weight: bold; color: black;">></span></span>
    <span style="font-weight: bold; color: black;"><value type="object" struct-name="app.PaperType" id="com.mysql.wb.papertype.archb"></span>
      <span style="font-weight: bold; color: black;"><value type="string" key="name"></span>Arch-B<span style="font-weight: bold; color: black;"></value<span style="font-weight: bold; color: black;">></span></span>
      <span style="font-weight: bold; color: black;"><value type="string" key="caption"></span>Arch B (12 in x 18 in.)<span style="font-weight: bold; color: black;"></value<span style="font-weight: bold; color: black;">></span></span>
      <span style="font-weight: bold; color: black;"><value type="real" key="width"></span>304.8<span style="font-weight: bold; color: black;"></value<span style="font-weight: bold; color: black;">></span></span>
      <span style="font-weight: bold; color: black;"><value type="real" key="height"></span>457.2<span style="font-weight: bold; color: black;"></value<span style="font-weight: bold; color: black;">></span></span>
    <span style="font-weight: bold; color: black;"></value<span style="font-weight: bold; color: black;">></span></span>
    <span style="font-weight: bold; color: black;"><value type="object" struct-name="app.PaperType" id="com.mysql.wb.papertype.archc"></span>
      <span style="font-weight: bold; color: black;"><value type="string" key="name"></span>Arch-C<span style="font-weight: bold; color: black;"></value<span style="font-weight: bold; color: black;">></span></span>
      <span style="font-weight: bold; color: black;"><value type="string" key="caption"></span>Arch C (18 in x 24 in.)<span style="font-weight: bold; color: black;"></value<span style="font-weight: bold; color: black;">></span></span>
      <span style="font-weight: bold; color: black;"><value type="real" key="width"></span>457.2<span style="font-weight: bold; color: black;"></value<span style="font-weight: bold; color: black;">></span></span>
      <span style="font-weight: bold; color: black;"><value type="real" key="height"></span>609.6<span style="font-weight: bold; color: black;"></value<span style="font-weight: bold; color: black;">></span></span>
    <span style="font-weight: bold; color: black;"></value<span style="font-weight: bold; color: black;">></span></span>
    <span style="font-weight: bold; color: black;"><value type="object" struct-name="app.PaperType" id="com.mysql.wb.papertype.archd"></span>
      <span style="font-weight: bold; color: black;"><value type="string" key="name"></span>Arch-D<span style="font-weight: bold; color: black;"></value<span style="font-weight: bold; color: black;">></span></span>
      <span style="font-weight: bold; color: black;"><value type="string" key="caption"></span>Arch D (24 in x 36 in.)<span style="font-weight: bold; color: black;"></value<span style="font-weight: bold; color: black;">></span></span>
      <span style="font-weight: bold; color: black;"><value type="real" key="width"></span>609.6<span style="font-weight: bold; color: black;"></value<span style="font-weight: bold; color: black;">></span></span>
      <span style="font-weight: bold; color: black;"><value type="real" key="height"></span>914.4<span style="font-weight: bold; color: black;"></value<span style="font-weight: bold; color: black;">></span></span>
    <span style="font-weight: bold; color: black;"></value<span style="font-weight: bold; color: black;">></span></span>
    <span style="font-weight: bold; color: black;"><value type="object" struct-name="app.PaperType" id="com.mysql.wb.papertype.arche"></span>
      <span style="font-weight: bold; color: black;"><value type="string" key="name"></span>Arch-E<span style="font-weight: bold; color: black;"></value<span style="font-weight: bold; color: black;">></span></span>
      <span style="font-weight: bold; color: black;"><value type="string" key="caption"></span>Arch E (36 in x 48 in.)<span style="font-weight: bold; color: black;"></value<span style="font-weight: bold; color: black;">></span></span>
      <span style="font-weight: bold; color: black;"><value type="real" key="width"></span>914.4<span style="font-weight: bold; color: black;"></value<span style="font-weight: bold; color: black;">></span></span>
      <span style="font-weight: bold; color: black;"><value type="real" key="height"></span>1219.2<span style="font-weight: bold; color: black;"></value<span style="font-weight: bold; color: black;">></span></span>
    <span style="font-weight: bold; color: black;"></value<span style="font-weight: bold; color: black;">></span></span>
    <span style="font-weight: bold; color: black;"><value type="object" struct-name="app.PaperType" id="com.mysql.wb.papertype.arche1"></span>
      <span style="font-weight: bold; color: black;"><value type="string" key="name"></span>Arch-E1<span style="font-weight: bold; color: black;"></value<span style="font-weight: bold; color: black;">></span></span>
      <span style="font-weight: bold; color: black;"><value type="string" key="caption"></span>Arch E1 (30 in x 42 in.)<span style="font-weight: bold; color: black;"></value<span style="font-weight: bold; color: black;">></span></span>
      <span style="font-weight: bold; color: black;"><value type="real" key="width"></span>762<span style="font-weight: bold; color: black;"></value<span style="font-weight: bold; color: black;">></span></span>
      <span style="font-weight: bold; color: black;"><value type="real" key="height"></span>1066.8<span style="font-weight: bold; color: black;"></value<span style="font-weight: bold; color: black;">></span></span>
    <span style="font-weight: bold; color: black;"></value<span style="font-weight: bold; color: black;">></span></span>
```