---
id: 74
title: 'Simple .NET script to list all of the .swf files in a folder as XML'
date: 2008-11-13 19:56:07
author: Tea
layout: revision
guid: '/2008/11/13/71-revision-3/'
permalink: '/?p=74'
---

Here is some handy code for if you have a bunch of .swf files and you need to get some XML to load them into flash. It should also totally be easy to change the script to list any file type you need enumerated.

```asp
"text/xml"<span style="color: #cc0000;">"System.Xml"</span><span style="color: #cc0000;">"System.IO"</span><span style="color: #cc0000;">"C#"</span> runat=<span style="color: #cc0000;">"server"</span><span style="color: #cc0000;">"scenes"</span><span style="color: #cc0000;">""</span><span style="color: #cc0000;">"*.swf"</span><span style="color: #cc0000;">"movie"</span><span style="color: #cc0000;">"name"</span>
```

This will output something like:

```xml
<span style="color: #009900;"><span style="font-weight: bold; color: black;"><?xml</span> <span style="color: #000066;">version</span>=<span style="color: #ff0000;">"1.0"</span> <span style="color: #000066;">encoding</span>=<span style="color: #ff0000;">"utf-8"</span><span style="font-weight: bold; color: black;">?></span></span>
<span style="color: #009900;"><span style="font-weight: bold; color: black;"><scenes<span style="font-weight: bold; color: black;">></span></span></span>
    <span style="color: #009900;"><span style="font-weight: bold; color: black;"><movie</span> <span style="color: #000066;">name</span>=<span style="color: #ff0000;">"scene_001.swf"</span><span style="font-weight: bold; color: black;">/></span></span>
    <span style="color: #009900;"><span style="font-weight: bold; color: black;"><movie</span> <span style="color: #000066;">name</span>=<span style="color: #ff0000;">"scene_002.swf"</span><span style="font-weight: bold; color: black;">/></span></span>
    <span style="color: #009900;"><span style="font-weight: bold; color: black;"><movie</span> <span style="color: #000066;">name</span>=<span style="color: #ff0000;">"scene_003.swf"</span><span style="font-weight: bold; color: black;">/></span></span>
    <span style="color: #009900;"><span style="font-weight: bold; color: black;"><movie</span> <span style="color: #000066;">name</span>=<span style="color: #ff0000;">"scene_004.swf"</span><span style="font-weight: bold; color: black;">/></span></span>
    <span style="color: #009900;"><span style="font-weight: bold; color: black;"><movie</span> <span style="color: #000066;">name</span>=<span style="color: #ff0000;">"scene_005.swf"</span><span style="font-weight: bold; color: black;">/></span></span>
    <span style="color: #009900;"><span style="font-weight: bold; color: black;"><movie</span> <span style="color: #000066;">name</span>=<span style="color: #ff0000;">"scene_006.swf"</span><span style="font-weight: bold; color: black;">/></span></span>
<span style="color: #009900;"><span style="font-weight: bold; color: black;"></scenes<span style="font-weight: bold; color: black;">></span></span></span>
```