---
id: 126
title: 'Simple .NET script to list all of the .swf files in a folder as XML'
date: 2008-11-13 19:56:21
author: Tea
layout: revision
guid: '/2008/11/13/71-revision-4/'
permalink: '/?p=126'
---

Here is some handy code for if you have a bunch of .swf files and you need to get some XML to load them into flash. It should also totally be easy to change the script to list any file type you need enumerated.

```asp
"text/xml""System.Xml""System.IO""C#" runat="server""scenes""""*.swf""movie""name"
```

This will output something like:

```xml
<span style="font-weight: bold; color: black;"><?xml version="1.0" encoding="utf-8"?></span>
<span style="font-weight: bold; color: black;"><scenes<span style="font-weight: bold; color: black;">></span></span>
    <span style="font-weight: bold; color: black;"><movie name="scene_001.swf"/></span>
    <span style="font-weight: bold; color: black;"><movie name="scene_002.swf"/></span>
    <span style="font-weight: bold; color: black;"><movie name="scene_003.swf"/></span>
    <span style="font-weight: bold; color: black;"><movie name="scene_004.swf"/></span>
    <span style="font-weight: bold; color: black;"><movie name="scene_005.swf"/></span>
    <span style="font-weight: bold; color: black;"><movie name="scene_006.swf"/></span>
<span style="font-weight: bold; color: black;"></scenes<span style="font-weight: bold; color: black;">></span></span>
```