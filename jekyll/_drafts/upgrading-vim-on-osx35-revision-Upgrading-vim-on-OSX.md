---
id: 54
title: 'Upgrading vim on OSX'
date: '2008-09-28T02:00:48-04:00'
author: Tea
layout: revision
guid: '/2008/09/28/35-revision/'
permalink: '/?p=54'
---

OSX ships with a respectable version of Vim, 7.0. I can't remember why, but I had some reason where I needed to upgrade to the latest copy (currently 7.2). Here is how to do it:

In a terminal window, run the following commands:

```php
svn co https://vim.svn.sourceforge.net/svnroot/vim/vim7
 
```

  
You will have to enter your password for the sudo command. This will install a vim GUI in your Applications folder. In order to upgrade the vim in your terminal window, you have to run these commands:

```php
 
```

Vim on the command line should now be updated to the latest version.

A side effect of this update is that your .vimrc file will be read from the more standard UNIX location of your home folder. To copy the OSX vimrc to your home folder so it can