---
id: 137
title: 'Human readable DATEDIFF function for SQL Server'
date: '2009-03-12T19:53:04-04:00'
author: Tea
layout: revision
guid: '/2009/03/12/38-revision-3/'
permalink: '/?p=137'
---

All the time, when I'm writing reports I need to display a ‘time elapsed' metric in a short easy to read manor. Usually I do this with a simple convenience function in whatever language I am writing the GUI in. For reports that are purely in SQL, I have created just such a convenience function for SQL server: **dateDiffHumanReadable( *startDate*, *endDate*, *precision* )**.

This makes it easy to display date spans.

To see how old I currently am, I would call:

```tsql
'6/2/1978 16:00:00'
```

  
This will return my current age:  
**30y 114d 38m 11s 620ms**This comes in handy when I have a log table with columns like this:

- process
- timeStart
- timeEnd

Just using DATEDIFF I would have to do this:

```tsql
''
```

With this function, I can get more informational results just doing this:

```tsql
 
```

The third parameter is a precision value for when you don't need right down to the millisecond returned. Calling this:

```tsql
'6/2/1978 16:00:00'<span style="color: #FF0000;">'y'</span><span style="color: #808080;">)</span>
```

  
This will return just the year of my current age:  
**30y**### Full code

```tsql
-- =============================================
<span style="color: #008080;">-- Author:		T. Curran</span>
<span style="color: #008080;">-- Create date: 3/20/2008</span>
<span style="color: #008080;">-- Description:	Generates a human readable difference between two dates, in the form '1y 5d 3h 2m 6s 10ms'</span>
<span style="color: #008080;">-- =============================================</span>
<span style="color: #FF0000;">'ms'</span><span style="color: #FF0000;">''</span><span style="color: #008080;">-- @dateScratch is used as a holding place for us to increment the date so we don't alter @dateStart</span>
<span style="color: #008080;">-- years</span>
<span style="color: #008080;">-- days</span>
<span style="color: #008080;">-- milliseconds</span>
<span style="color: #008080;">-- seconds  </span>
<span style="color: #008080;">-- minutes  </span>
<span style="color: #008080;">-- Build the output string based on the precision</span>
 
	<span style="color: #008080;">-- years</span>
<span style="color: #FF0000;">'y'</span><span style="color: #FF0000;">'d'</span><span style="color: #FF0000;">'h'</span><span style="color: #FF0000;">'m'</span><span style="color: #FF0000;">'s'</span><span style="color: #FF0000;">'ms'</span><span style="color: #FF0000;">'y '</span><span style="color: #008080;">-- days</span>
<span style="color: #FF0000;">'d'</span><span style="color: #FF0000;">'h'</span><span style="color: #FF0000;">'m'</span><span style="color: #FF0000;">'s'</span><span style="color: #FF0000;">'ms'</span><span style="color: #FF0000;">'d '</span><span style="color: #008080;">-- hours</span>
<span style="color: #FF0000;">'h'</span><span style="color: #FF0000;">'m'</span><span style="color: #FF0000;">'s'</span><span style="color: #FF0000;">'ms'</span><span style="color: #FF0000;">'h '</span><span style="color: #008080;">-- minutes</span>
<span style="color: #FF0000;">'m'</span><span style="color: #FF0000;">'s'</span><span style="color: #FF0000;">'ms'</span><span style="color: #FF0000;">'m '</span><span style="color: #008080;">-- seconds</span>
<span style="color: #FF0000;">'s'</span><span style="color: #FF0000;">'ms'</span><span style="color: #FF0000;">'s '</span><span style="color: #008080;">-- milliseconds</span>
<span style="color: #FF0000;">'ms'</span><span style="color: #FF0000;">'ms '</span><span style="color: #008080;">-- the above string concat always ends with a space, if the space is there at the end remove it</span>
<span style="color: #FF0000;">''</span>
```