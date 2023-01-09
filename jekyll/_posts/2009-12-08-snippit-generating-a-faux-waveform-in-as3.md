---
id: 326
title: '[snippit] &#8211; generating a faux waveform in AS3'
date: 2009-12-08 16:22:52
author: Tea
excerpt: 'Working on a Flash project.  I had to use the microphone to record some audio and generate a simple waveform so the user has some feedback that they are being heard.  While not a true waveform, you can use the microphone activity level to generate something that works pretty well. '
layout: post
guid: '/?p=326'
permalink: /2009/12/08/snippit-generating-a-faux-waveform-in-as3/
aktt_notify_twitter:
    - 'yes'
aktt_tweeted:
    - '1'
dsq_thread_id:
    - '476031831'
categories:
    - flash
    - web
tags:
    - as3
    - flash
    - snippit
---

Working on a Flash project. I had to use the microphone to record some audio and generate a simple waveform so the user has some feedback that they are being heard. While not a true waveform, you can use the microphone activity level to generate something that works pretty well.

Here is the code to generate the above sample:

```actionscript
import com.wirelust.waveform.Waveform;
import flash.media.Microphone;</code>

<code lang="actionscript">private var wave:Waveform = new Waveform();
private var mic:Microphone;

private function init():void {
  wave.height = 50;
  wave.width = 450;
  wave.y = this.height/2 - wave.height/2;
  wave.x = this.width/2 - wave.width/2;
  this.addChild(wave);

  mic = Microphone.getMicrophone();
  mic.setUseEchoSuppression(false);

  // loopback is required so we can get the activity level and create the waveform. - so stupid
  mic.setLoopBack(true);

  // turn off the volume for the loopback
  var mySoundTransform:SoundTransform = new SoundTransform();
  mySoundTransform.volume = 0;
  mic.soundTransform = mySoundTransform;

  this.addEventListener(Event.ENTER_FRAME, onFrameEnter);
}
```

```
private function onFrameEnter(event:Event):void {
  if (mic != null &amp;&amp; !mic.muted) {
    wave.add(mic.activityLevel);
    wave.invalidateDisplayList();
  }
}
```

And for the Waform class:

```actionscript
import flash.display.*;
import flash.events.*;
import flash.geom.Matrix;</code>

<code lang="actionscript">import mx.core.*;
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
      for (var i:uint=0; i<levels.length; i++) {
        if (levels[i] > highestLevel) {
          highestLevel = levels[i];
        }
      }
      scaleFactor = height/2/highestLevel;
    }

    super.updateDisplayList(param1, param2);
    graphics.clear();
    graphics.lineStyle(1, color, 1, true, LineScaleMode.NORMAL);
    var lineX:uint = 0;
    for (var j:uint=0; j<levels.length; j++) {
        graphics.moveto(linex, this.height2 - (levels[j] * scalefactor));
        graphics.lineto(linex, + linex++); }
        if (borderwidth > 0) {
          graphics.lineStyle(borderWidth, borderColor, 1, true, LineScaleMode.NORMAL);
          graphics.drawRect(0, 0, this.width, this.height);
        }
      }
    }
}
```

### Files

[![](/img/famfamicons/icons/page_white_put.png)](/examples/waveform/waveform.zip) [Download source code](/examples/waveform/waveform.zip)