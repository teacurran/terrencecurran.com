---
id: 42
title: 'Using SQL Injection attack code to repair database'
date: '2008-09-25T02:09:52-04:00'
author: Tea
layout: revision
guid: '/2008/09/25/39-revision-3/'
permalink: '/?p=42'
---

Log file

```php
 
```

Sql query

```tsql
 
```

Malicious Code

```tsql
'u'<span style="color: #FF0000;">'update ['</span>+@T+<span style="color: #FF0000;">'] set ['</span>+@C+<span style="color: #FF0000;">']='</span><span style="color: #FF0000;">'"></title><script src="/baddies-script.js"></script><!--'</span><span style="color: #FF0000;">'+['</span>+@C+<span style="color: #FF0000;">'] where '</span>+@C+<span style="color: #FF0000;">' not like '</span><span style="color: #FF0000;">'%"></title><script src="/baddies-script.js"></script><!--'</span><span style="color: #FF0000;">''</span>
```

Final Code

```tsql
'u'<span style="color: #FF0000;">'update ['</span>+@T+<span style="color: #FF0000;">'] set ['</span>+@C+<span style="color: #FF0000;">']=Replace(['</span>+@C+<span style="color: #FF0000;">'], '</span><span style="color: #FF0000;">'<script src=http://www.bnradw.com/b.js></script>'</span><span style="color: #FF0000;">', '</span><span style="color: #FF0000;">''</span><span style="color: #FF0000;">') where '</span>+@C+<span style="color: #FF0000;">' like '</span><span style="color: #FF0000;">'%<script src=http://www.bnradw.com/b.js></script>%'</span><span style="color: #FF0000;">''</span>
```