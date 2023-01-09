---
id: 47
title: 'Using SQL Injection attack code to repair database'
date: '2008-09-25T15:42:20-04:00'
author: Tea
layout: revision
guid: '/2008/09/25/39-revision-8/'
permalink: '/?p=47'
---

Now that Google has started flagging sites that are linking to badware in their index I've been getting quite a few calls from people who have been flagged and need to get back on track.

These are often sites that were written a while back (not by myself) when developers didn't think as much about SQL injection as they do now. Sometimes the code was just poorly written by someone who didn't know better. However it happened, each site has its own challenge.

Fixing the security hole is generally straight forward — I usually just have to identify where the SQL isn't properly escaped and fix that code. The hard part I have had fixing these sites is fixing the database itself. Some clients have backups, and some I can fix with [SQL Log Rescue](http://www.red-gate.com/products/SQL_Log_Rescue/index.htm), but generally a lot of small clients simply don't have great control over their server and often don't have any backups.

I had one such of these clients this week where their database had hundreds and hundreds of tables, all with malware code injected into the data. I was initially going to write a script to clean all the data, but after looking at the malware attack, I was able to use their own code to fix the database.

In the server log files. I noticed this request was coming in for every script several times a day. Looks like it just wanders the internet hoping that that id=2 in the query string won't be escaped in the code.

```php
 
```

  
If the id isn't escaped, as it wasn't in this situation, a query like this will hit your SQL server:

```tsql
 
```

hmm. okay. so what is it executing as the value of @S?  
If you change the statement from EXEC(@S) to PRINT(@S) you get this:  
Warning: **Do not run this on your server, it will mess up ALL of your data**

```tsql
'u''update ['+@T+'] set ['+@C+']=''"></title><script src="/baddies-script.js"></script><!--''+['+@C+'] where '+@C+' not like ''%"></title><script src="/baddies-script.js"></script><!--'''
```

I thought this code was pretty clever. It selects a cursor that contains every varchar and text field in every table on the database, then loops over the cursor and issues an update command to append their bad script to the end of the data in each field.

Luckily, it is in their best interest to leave your data in place and just place their code at the end – it increases the chance you won't know your site is infected.

Since all of the original data is still in the database, I was able to tweak their code a little bit to write a script to fix the data:

```tsql
'u''update ['+@T+'] set ['+@C+']=Replace(['+@C+'], ''<script src=http://www.bnradw.com/b.js></script>'', '''') where '+@C+' like ''%<script src=http://www.bnradw.com/b.js></script>%'''-- exec(@SQL)
 
```