---
id: 41
title: 'Using SQL Injection attack code to repair database'
date: '2008-09-25T02:09:39-04:00'
author: Tea
layout: revision
guid: '/2008/09/25/39-revision-2/'
permalink: '/?p=41'
---

Log file

```php
 
```

Sql query

```tsql
 
```

Malicious Co

Final Code

```tsql
'u''update ['+@T+'] set ['+@C+']=Replace(['+@C+'], ''<script src=http://www.bnradw.com/b.js></script>'', '''') where '+@C+' like ''%<script src=http://www.bnradw.com/b.js></script>%'''
```