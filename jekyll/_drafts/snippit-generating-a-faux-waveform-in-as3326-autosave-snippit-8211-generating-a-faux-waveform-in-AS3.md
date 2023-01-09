---
id: 374
title: '[snippit] &#8211; generating a faux waveform in AS3'
date: 2010-01-06 10:32:55
author: Tea
layout: revision
guid: '/2010/01/06/326-autosave/'
permalink: '/?p=374'
---

Working on a Flash project. I had to use the microphone to record some audio and generate a simple waveform so the user has some feedback that they are being heard. While not a true waveform, you can use the microphone activity level to generate something that works pretty well.

\[kml\_flashembed publishmethod=”static” fversion=”9.0.0″ movie=”/examples/waveform/bin-debug/waveform.swf” width=”500″ height=”250″ targetclass=”flashmovie”\]

[![Get Adobe Flash player](http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif)](http://adobe.com/go/getflashplayer)

\[/kml\_flashembed\]

**Features:**

- Very Simple
- Allows you to set min and max values for height and width
- Holding shift key keeps aspect ratio

You currently have to do the cropping on your own, either in flash or server side. I will followup later with examples of how to do that.

Here is the code to generate the above sample:

```actionscript
// loopback is required so we can get the activity level and create the waveform. - so stupid
<span style="color: #808080; font-style: italic;">// turn off the volume for the loopback</span>
 
```

And for the Waform class:

```actionscript
// trim the levels so we don't keep eating up memory
<span style="color: #808080; font-style: italic;">// autoscale will find the highest volume and scale all lines in the display accordingly.</span>
 
```

### Files

[![](/img/famfamicons/icons/page_white_put.png)](/examples/waveform/waveform.zip) [Download source code](/examples/waveform/waveform.zip)