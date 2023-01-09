---
id: 138
title: 'Human readable DATEDIFF function for SQL Server'
date: '2009-03-12T20:02:55-04:00'
author: Tea
layout: revision
guid: '/2009/03/12/38-revision-4/'
permalink: '/?p=138'
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
'6/2/1978 16:00:00''y')
```

  
This will return just the year of my current age:  
**30y**### Full code

```tsql
-- =============================================
-- Author:		T. Curran
-- Create date: 3/20/2008
-- Description:	Generates a human readable difference between two dates, in the form '1y 5d 3h 2m 6s 10ms'
-- =============================================
'ms'''-- @dateScratch is used as a holding place for us to increment the date so we don't alter @dateStart
-- years
-- days
-- milliseconds
-- seconds  
-- minutes  
-- Build the output string based on the precision
 
	-- years
'y''d''h''m''s''ms''y '-- days
'd''h''m''s''ms''d '-- hours
'h''m''s''ms''h '-- minutes
'm''s''ms''m '-- seconds
's''ms''s '-- milliseconds
'ms''ms '-- the above string concat always ends with a space, if the space is there at the end remove it
''
```

**UPDATE:**  
[Adam](http://blog.adamclerk.com) [correctly pointed out](http://blog.adamclerk.com/2009/03/human-readable-datediff/) that my function didn't work when the time span was less than 1 day because:  
SELECT DATEDIFF(hour, '11:50:48.000′, '12:12:45.000′)  
Will return 1 rather than 0.

I have updated the function to use DATEDIFF to calculate the year, then use a ‘ms' calculation to count up for the other values.