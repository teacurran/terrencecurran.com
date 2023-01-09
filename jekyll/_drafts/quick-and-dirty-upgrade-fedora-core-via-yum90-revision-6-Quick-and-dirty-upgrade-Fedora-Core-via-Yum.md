---
id: 132
title: 'Quick and dirty upgrade Fedora Core via Yum'
date: 2009-01-02 18:44:01
author: Tea
layout: revision
guid: '/2009/01/02/90-revision-6/'
permalink: '/?p=132'
---

First off Fedora has an [awesome FAQ](http://fedoraproject.org/wiki/YumUpgradeFaq) for how to upgrade your OS with Yum. If you don't care for all that reading and thinking, here is a quick and dirty set of notes I have been using to upgrade several servers.

This process is more likely to hose your config files, so make sure you have them backed up somewhere. (I use subversion for everything in /etc).

This also assumes you are runlevel 3. duh.

1\. if you are connected via ssh, use screen. Screen will save your life during long running processes, and generally you should be using it all the time anyway.

```php
screen
```

2\. run an update first:

```php
 
```

3\. check what you have installed:

```php
 
```

4\. remove anything you don't need or use, it will just waste time and cause conflicts. For me, I often find things like OpenOffice or Audio Programs on headless servers. Sometimes I even remove stuff that I know is easy to add back later and isn't required by the upgrade scripts. (firefox, cups, ImageMagick, crap like that)

```php
yum remove openoffice.org
```

5\. change your repository. The FAQ says you can do this with just installing the fedora-release-10-1.noarch.rpm. but that doesn't seem to work for me. It gets a conflict that you also need the release notes. This seems to work better:

```php
wget ftp:<span style="color: #808080; font-style: italic;">//download.fedora.redhat.com/pub/fedora/linux/releases/10/Everything/i386/os/Packages/fedora-release-10-1.noarch.rpm</span>
 
wget ftp:<span style="color: #808080; font-style: italic;">//download.fedora.redhat.com/pub/fedora/linux/releases/10/Everything/i386/os/Packages/fedora-release-notes-10.0.0-1.noarch.rpm</span>
 
rpm -u *.rpm
```

6\. clear out the old caches and files so it can detect that you need to update:

```php
yum clean all
```

7\. At this point you can just run “yum upgrade” and cross your fingers. I like to do smaller updates of packages with a lot of dependencies. I have had good results with combination of upgrades like this:

```php
 
```

  
The last one of course upgrading anything not already touched by the others. 8\. Depending on your configuration and what you have installed you will probably still have some dependency issues that will need to be resolved. It wouldn't be life without some issues though right?