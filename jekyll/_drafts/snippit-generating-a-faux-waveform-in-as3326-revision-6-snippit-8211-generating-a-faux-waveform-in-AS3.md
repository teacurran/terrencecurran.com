---
id: 332
title: '[snippit] &#8211; generating a faux waveform in AS3'
date: 2009-12-08 16:15:15
author: Tea
layout: revision
guid: '/2009/12/08/326-revision-6/'
permalink: '/?p=332'
---

Working on a project. I had to use the microphone to record some audio and generate a simple waveform so the user has some feedback that they are being heard. While not a true waveform, you can use the microphone activity level to generate something that works pretty well.

\[kml\_flashembed publishmethod=”static” fversion=”9.0.0″ movie=”/examples/waveform/bin-debug/waveform.swf” width=”500″ height=”250″ targetclass=”flashmovie”\]

[![Get Adobe Flash player](http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif)](http://adobe.com/go/getflashplayer)

\[/kml\_flashembed\]

Here is the code to generate the above sample:

```actionscript
// loopback is required so we can get the activity level and create the waveform. - so stupid
// turn off the volume for the loopback
 
```

And for the Waform class:  
`<br></br>import flash.display.*;<br></br>import flash.events.*;<br></br>import flash.geom.Matrix;`

import mx.core.\*;  
import mx.graphics.IFill;  
import mx.graphics.IStroke;  
import mx.graphics.SolidColor;  
import mx.graphics.Stroke;

public class Waveform extends UIComponent {  
 private var levels:Array = new Array();  
 public var color:uint = 0x000000;  
 public var borderColor:uint = 0xCCCCCC;  
 public var borderWidth:uint = 1;  
 public var autoScale:Boolean = true;

 public function Waveform() {  
 }

 public function add(level:Number):void {  
 // trim the levels so we don't keep eating up memory  
 while(levels.length &gt; this.width) {  
 levels.shift();  
 }  
 levels.push(level);  
 }

 override protected function updateDisplayList(param1:Number, param2:Number) : void {  
 var scaleFactor:Number = 1;  
 // autoscale will find the highest volume and scale all lines in the display accordingly.  
 if (autoScale) {  
 var highestLevel:Number = 0;  
 for (var i:uint=0; i<levels.length i="" if=""> highestLevel) {  
 highestLevel = levels\[i\];  
 }  
 }  
 scaleFactor = height/2/highestLevel;  
 }</levels.length>

 super.updateDisplayList(param1, param2);  
 graphics.clear();  
 graphics.lineStyle(1, color, 1, true, LineScaleMode.NORMAL);  
 var lineX:uint = 0;  
 for (var j:uint=0; j<levels.length graphics.lineto="" graphics.moveto="" if="" j="" linex="" scalefactor="" this.height=""> 0) {  
 graphics.lineStyle(borderWidth, borderColor, 1, true, LineScaleMode.NORMAL);  
 graphics.drawRect(0, 0, this.width, this.height);  
 }  
 }  
}  
}  
</levels.length>