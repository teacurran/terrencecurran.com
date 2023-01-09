---
id: 23
title: 'SQL NOT IN SubQuery + Null'
date: 2008-01-04 12:37:09
author: Tea
layout: post
guid: '/2008/01/04/sql-server-not-in-subquery-null/'
permalink: /2008/01/04/sql-server-not-in-subquery-null/
dsq_thread_id:
    - '475444176'
categories:
    - SQL
---

This is something that wasn't apparent to me for quite a while and seems to trip me up every now and again.

Say you have two tables. ‘Employees' and ‘Payroll'.

**Employees**

| column | type |
|---|---|
| username | varchar(200) |
| email | varchar(200) |

**Payroll**

| column | type |
|---|---|
| username | varchar(200) |
| paid | datetime |
| amount | money |

Not great tables, but they will get the point across.

If you wanted to select all employees who have never been paid, you would normally do a query like this:

```sql
 
```

What trips up this query is if there is a NULL username in Payroll, it will never return any results. In order to make it work, you have to select all the NON NULL usernames from Payroll.

```sql
 
```

This behavior seems to be consistent in MySQL 5 and SQL Server 2005, I haven't tested in Oracle.