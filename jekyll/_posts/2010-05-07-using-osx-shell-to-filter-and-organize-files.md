---
id: 100
title: 'Command line file organization on OSX and Linux'
date: '2010-05-07T11:34:28-04:00'
author: Tea
layout: post
guid: '/?p=100'
permalink: /2010/05/07/using-osx-shell-to-filter-and-organize-files/
aktt_notify_twitter:
    - 'no'
dsq_thread_id:
    - '490793287'
categories:
    - apple
tags:
    - bash
    - cli
    - osx
---

Some quick CLI commands I use all the time but forget the exact syntax for.

Find all files that have been modified in the past 7 days

```bash
find . -mtime -7
```

Find all JPEGs that have been modified more than 30 days ago

```bash
find . -name \*.jpg -mtime +30
```

Move all JPEGs from the current folder (recursively) that are greater than 40k into the folder /tmp/2

```bash
mv `find ./ -name \*.jpg -size +40k` /tmp/2
```

Tell me info about files in the current folder

```bash
file `ls`
```

Tell me info about all of the mp3 files in this folder

```bash
find . -name \*.mp3 -exec file '{}' \;
```

Clean subversion metadata out of a directory

```bash
find . -name .svn -type d -exec rm -r '{}' \;
```

Use the above to make an export of a working copy by doing:

```bash
cp -R ./working_copy ./working_copy_export
find ./working_copy_export -name .svn -type d -exec rm -r '{}' \;
```

Any command that is deleting files will prompt you for each file. to go through them all without prompts, just run the command as root

```bash
sudo find ./working_copy_export -name .svn -type d -exec rm -r '{}' \;
```