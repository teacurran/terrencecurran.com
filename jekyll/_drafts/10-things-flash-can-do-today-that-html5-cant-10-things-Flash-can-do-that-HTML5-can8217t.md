---
id: 491
title: '10+ things Flash can do that HTML5 can&#8217;t'
date: '2010-05-21T11:57:48-04:00'
author: Tea
layout: post
guid: '/?p=491'
permalink: /2010/05/21/10-things-flash-can-do-today-that-html5-cant/
aktt_notify_twitter:
    - 'no'
    - 'no'
dsq_thread_id:
    - '475436705'
categories:
    - apple
    - flash
    - web
tags:
    - flash
    - html5
---

In face of all the hype, fear, confusion related to HTML5 vs Flash I wanted to come up with a reasoned list of why I think flash is still the right choice for building many types of web applications. This is a list of things I could think of and find that highlight some areas where Flash has innovated ahead of where the HTML5 specs and implementations are at currently.

### 1. Touch interface support

Despite what Apple says, flash applications that were designed to work with rollovers work really well when used on a touch based interface. ([see video here](http://theflashblog.com/?p=2027)). Apple neglects to mention that rollovers are super common with HTML/js sites now and none of the mobile web browsers handle them particularly well. In addition, Flash ships with a full API for multi-touch that developers can use. HTML5 multi-touch support is still being worked out and is in very early stages of being implemented.

### 2. More Audio Codecs

Flash supports ADPCM, HE-AAC, MP3, WAV, Nellymoser, and Speex codecs. HTML5 defines an audio tag and leaves it up to the browser to decide what Codecs to support. Where does that leave you? As of this writing, Firefox will be supporting OGG and WAV, Chrome supporting OGG and MP3, IE supporting MP3 and AAC. To build a site with HTML5 you will have to choose your codecs carefully and make sure that users are using a compatible browser. As an aside, it is also possible to write pure AS3 decoders, so there is [an OGG vorbis](http://barelyfocused.net/blog/2008/10/03/flash-vorbis-player/) player written completely in Flash.

### 3. More Video Codecs

A lot like the story with audio, Flash supports multiple video codecs (On2 VP6, Sorenson Spark, and H.264). HTML5 leaves it up to the browser to support codecs so as a developer you have to know what browser your user is using and choose an appropriate codec. Encoding your video twice once for Firefox and once for IE is going to be painful. Even sites that are moving to HTML5/H.264 are using Flash as a fallback for browsers that don't support H.264.

### 4. Color Correction

This doesn't mean a whole ton to me, and might not to you, but there are people out there for which color correction is a very big deal. If you were building a workflow application for professional photographers for instance, having built in color correction could make a ton of difference.

### 5. Manipulate Binary Data

Actionscript 3 is capable of manipulating raw binary data. This enables you to do things like extend it to handle more file formats, network protocols, or media codecs. Javascript cannot yet handle binary data and I don't see a proposal anywhere that would enable it to do so.

### 6. Peer-2-Peer

P2P is in the [HTML5 spec](http://www.w3.org/TR/2008/WD-html5-20080122/#network) but as of this writing isn't implemented in any browsers. Flash supports P2P out of the box with frameworks to assist in helping you build applications that use it. P2P enables you to have end users send data to each other without a need for a central server. For example, if you had a video chat service, you wouldn't want every user to stream their video to a central server to be connected. The load on your central server would be huge. You would instead have users that are communicating with each other connect directly to each other to transfer the video.

### 7. Binary Network Sockets

Like P2P, Web Sockets will take care of most of your networking needs, but it can't handle binary data (or work over UDP). This limits the type of applications you can write. Also, as of this writing, Web Sockets is only implemented in Google Chrome.

### 8. Use the Webcam or Microphone

The Device APIs and Policy Working Group is supposed to be working on a recommendation for this, but there goal is to deliver a standard by Mid 2011. Once that is complete, browser makers can begin conform to this standard. If you want an application where users record photos, audio, or video – Flash is still your best choice.

### 9. Video Streaming

This one seems to confuse a lot of people that I talk to because they don't realize that Flash has two mechanisms to service Video/Audio. You can host your media on a plain old web server and have it play as it downloads, or you can host it with an RTMP server and have it stream to the user. Streaming allows you to do things like bitrate adjustments (adjusting quality depending on the user's speed) and jump around in a file. For example, when you click in the middle of a 2 hour long movie on HULU, the player jumps right to that point and starts playing. If you had this long movie hosted on a normal web server for download you would have to wait until the entire video up to that point has been downloaded.

HTML5 only defines the HTTP download type as part of the standard. There are specs out there for getting progressive streaming working with HTML5 but they aren't all completely implemented and aren't part of the core HTML5 standard.

### 10. Media Digital Rights Management

There are tons of different solutions out there for better protecting your content with Flash. I haven't yet seen any DRM methods that work with HTML5. When I bring this up with discussions I get an earful about how DRM is evil and who cares if it isn't supported. I tend to agree that DRM has issues and I'm not thrilled to have to use it, but try telling that to your boss who owns the content. Wether we like it or not, DRM is a requirement for many people who are serving up the content wether we object to it or not.

### 11. Built in Accessibility support

Developers often overlook accessibility but anyone who has worked on a site for a large corporation knows that this is a real concern since having a website that is not usable by disabled users opens them up to lawsuits. Flash supports Microsoft's Active Accessibility (MSAA) API. As well as TimedText closed captioning for video subtitles.

Critics have rightly complained that this support only works on windows but the number of screen readers on OSX and Linux is limited and less standardized, so I see Adobe's choice here.

I don't see any mention of Accessibility in any of the HTML5 proposals. (let me know if it is there). I'm sure it will be trivial to write javascript that parses TimedText and syncs it with video but I would really have liked to see something about CC in the specs.

### 12. Massive community supported library set

This is an area where HTML5/javascript is catching up, but it is still a long way off. The flash community is massive and has tons of open source libraries for building almost anything you can imagine.

### 13. Full screen mode

Late Entry: 5/27/2010  
HTML5 prohibits browsers from making any way to programmatically enter full screen mode. It allows browsers to provide a way to view video full screen but not other elements. With Flash a user click action can trigger full screen of any content. While some talk, legitimately, about security concerns – this feature is used successfully by many sites out there to deliver a better user experience. Full screen mode is used not just for video viewing, but for Kiosks, presentations, and many multimedia rich sites I've seen. I have also not heard of any nefarious sites in the wild using full screen to try to trick users. The combination of click to activate and escape to exit seem to do a pretty good job of offering an okay balance of security and utility.

### There you have it

There you have it, 12 things I can think of that continue to make Flash the right choice for many projects. I'm going to keep the list titled 10 because some people will complain that #12 isn't a feature of the platform and who makes lists of 11 things.

For the record, I'm not an HTML5 hater. I use whatever technology is best for any given job. I look forward to more standards, more openness, and more cool new tech. On those fronts HTML5 is looking more awesome by the day, but if I want to write an app now and now next year, it isn't the right choice for everything.