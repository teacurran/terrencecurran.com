---
id: 263
title: '0x80070005 error when trying to create Scheduled Task in Windows 2003'
date: '2009-10-12T03:33:20-04:00'
author: Tea
layout: post
guid: '/?p=263'
permalink: /2009/10/12/0x80070005-error-when-trying-to-create-scheduled-task-in-windows-2003/
aktt_notify_twitter:
    - 'no'
dsq_thread_id:
    - '476181368'
categories:
    - Uncategorized
tags:
    - errors
    - Windows
---

When I was trying to set up a scheduled take in windows 2003, I kept getting this error: 80070005 access is denied

A lot of googling and I found the following things to try if you are having a similar issue:

### Local Security policy Settings

1\. Open your local security policy control panel:  
Start -&gt; Control Panel -&gt; Administrative Tools -&gt; Local Security Policy  
2\. go to the folder:  
Security\\Local Policies\\Security Options  
3\. check the following permissions:  
Interactive logon: Require Domain Controller authentication to unlock – **set to Disabled**  
Network Access: Let everyone permissions apply to anonymous users – **set to Enabled**  
Interactive Login: Message text for users attempting to log in – **clear this setting**

That last one creates a popup message that appears when users log into the computer. I found that this causes problems with some but not all of scheduled tasks.

### File Permissiosn

Check the file and folder permissions of whatever script you are tying to execute. Make sure that the user you are trying to run the scheduled task as has Read and Execute permissions for the script.

If your script is a .bat file, make sure the user has Read and Execute permissions for cmd.exe

If your script is a .vbs. file, make sure that the user has Read and Execute permissions for cscript.exe

### Too many permissions, try an unprivileged user

With older copies of windows it was fairly common practice to run all scheduled tasks as Administrator or some other type of super user. Security policies tend to be tighter now and are often set to restrict users with too much power as logging on in batch mode.

Create a new user who is a member of only the default Users group. Grant this user permissions on the folders you need to run your scheduled tasks. Keeping this user out of the Administrators group will make your server more secure and might clear up the Access Denied error.