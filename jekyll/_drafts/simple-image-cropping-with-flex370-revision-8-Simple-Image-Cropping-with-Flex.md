---
id: 380
title: 'Simple Image Cropping with Flex'
date: 2010-01-06 10:33:39
author: Tea
layout: revision
guid: '/2010/01/06/370-revision-8/'
permalink: '/?p=380'
---

Here is a simple, pure as3, image cropper I wrote for Flex. I'll try do a post later in the week describing how to use it in Flash cs3 and cs4.

\[kml\_flashembed publishmethod=”static” fversion=”9.0.0″ useexpressinstall=”true” replaceId=”flex\_image\_crop” movie=”/apps/flex\_image\_crop/bin-debug/main.swf” width=”640″ height=”458″ targetclass=”flashmovie”\]

![screenshot for people without flash](/apps/flex_image_crop/flex_image_crop_20100106.jpg)

\[/kml\_flashembed\]

**Features:**

- Very Simple
- Allows you to set min and max values for height and width
- Holding shift key keeps aspect ratio

You currently have to do the cropping on your own, either in flash or server side. I will followup later with examples of how to do that.

To embed this into you application, all you have to do is:

```actionscript
"demo1.jpg");
	
	// imageBox is an mx:HBox in my mxml
// Set up the initial crop
 
```

You can then listen for CropBox.EVENT\_CHANGED to get the dimensions of the box as it changes:

```javascript
// snipped ...
 
```

### Files

[![](/img/famfamicons/icons/page_white_put.png)](/apps/flex_image_crop/flex_image_crop_20100106.zip) [Download source code](/apps/flex_image_crop/flex_image_crop_20100106.zip)