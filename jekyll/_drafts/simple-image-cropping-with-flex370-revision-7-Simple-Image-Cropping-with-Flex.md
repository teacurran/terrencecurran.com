---
id: 379
title: 'Simple Image Cropping with Flex'
date: 2010-01-06 10:30:37
author: Tea
layout: revision
guid: '/2010/01/06/370-revision-7/'
permalink: '/?p=379'
---

Here is a simple, pure as3, image cropper I wrote for Flex. I'll try do a post later in the week describing how to use it in Flash cs3 and cs4.

\[kml\_flashembed publishmethod=”static” fversion=”9.0.0″ useexpressinstall=”true” replaceId=”flex\_image\_crop” movie=”/apps/flex\_image\_crop/bin-debug/main.swf” width=”640″ height=”458″ targetclass=”flashmovie”\]

![screenshot for people without flash](/apps/flex_image_crop/flex_image_crop_20100106.jpg)

\[/kml\_flashembed\]

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