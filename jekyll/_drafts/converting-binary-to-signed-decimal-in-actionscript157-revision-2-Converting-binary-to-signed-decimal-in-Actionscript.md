---
id: 159
title: 'Converting binary to signed decimal in Actionscript'
date: '2009-04-08T16:42:37-04:00'
author: Tea
layout: revision
guid: '/2009/04/08/157-revision-2/'
permalink: '/?p=159'
---

If you're like me, you may have been living these past few years taking advantage of the luxury of new sleek programming languages that rarely require you to do low level operations. One of the old skills I seem to always let get rusty enough is bitwise operation. Most code written with the help of frameworks doesn't require this type of code and most programmers probably don't even bother to learn it anymore.

I can into an instance yesterday where I needed to do some bitwise work in actionscript. The code was reading a bytestream from a binary file and converting to an array of numbers. Since this project was ported from Java (by someone else), a simple operation was overlooked. It was taking the binary number and converting it to a signed short. Since actionscript doesn't have a short datatype, the conversion isn't as straight forward in java.

In java the operation looked like this:

```java
<span style="color: #808080; font-style: italic;">//  binary: 1111 1111 1111 0001</span>
<span style="color: #808080; font-style: italic;">// value = -15 </span>
```

Since short in java is always stored with a signed bit, the cast appropriately set the value at -15.

The way this was translated into Actionscript looked liked this:

```actionscript
<span style="color: #808080; font-style: italic;">//  binary: 1111 1111 1111 0001</span>
<span style="color: #808080; font-style: italic;">// value = 65521 </span>
```

Actionscript has no concept of casting for primitives so the int(hexValue) doesn't do anything at all.

Here is the workaround I came up with, I suspect there is a shorter way to get the same result but I can't think of one right now.

```actionscript
<span style="color: #808080; font-style: italic;">//  binary: 1111 1111 1111 0001</span>
<span style="color: #808080; font-style: italic;">// get everything except the signed bit "111 1111 1111 0001"</span>
<span style="color: #808080; font-style: italic;">// unsignedValue now equals 32,753</span>
<span style="color: #808080; font-style: italic;">// if the signed flag is set, flip the value</span>
<span style="color: #808080; font-style: italic;">// 0x800 =  32,768 (maximum 15 bit number)</span>
<span style="color: #66cc66;">}</span>
 
<span style="color: #808080; font-style: italic;">// signedValue = -15 </span>
```