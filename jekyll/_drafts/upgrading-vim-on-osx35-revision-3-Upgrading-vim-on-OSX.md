---
id: 56
title: 'Upgrading vim on OSX'
date: '2008-09-28T02:04:56-04:00'
author: Tea
layout: revision
guid: '/2008/09/28/35-revision-3/'
permalink: '/?p=56'
---

OSX ships with a respectable version of Vim, 7.0. I can't remember why, but I had some reason where I needed to upgrade to the latest copy (currently 7.2). Here is how to do it:

In a terminal window, run the following commands:

```bash
 
```

  
You will have to enter your password for the sudo command. This will install a vim GUI in your Applications folder. In order to upgrade the vim in your terminal window, you have to run these commands:

```bash
 
```

Vim on the command line should now be updated to the latest version.

A side effect of this update is that your .vimrc file will be read from the more standard UNIX location of your home folder. To copy the OSX vimrc to your home folder so it can be read, run this command:

```bash
cp /usr/share/vim/vimrc ~/.vimrc
```