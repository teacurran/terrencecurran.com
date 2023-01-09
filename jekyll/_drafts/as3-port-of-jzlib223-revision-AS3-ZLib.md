---
id: 224
title: 'AS3 ZLib'
date: '2009-06-08T03:02:09-04:00'
author: Tea
layout: revision
guid: '/2009/06/08/223-revision/'
permalink: '/?p=224'
---

Last month I was working on a project that used [FZip](http://codeazur.com.br/lab/fzip/) to decompress some zip files in flash.

One tricky thing about FZip is that when running in Flash Player it requires your zip files to have an adler32 checksum for each file in order to work. This is normally fixed with a work around python script provided with FZip.

The python script is easy and all, but why not figure out how to do it in pure AS3 with more standard zip files.

In order to get it to work I set out to implement the inflate algorithm in as3. Since the easiest way to do this was to port some already written code, I ported [JZlib](http://www.jcraft.com/jzlib/).

This port supports everything in JZlib so you can use it for any inflate or deflate operations you need.

**To as3zlib with FZip**

- [Download Modified FZip Source](/examples/fzip_as3zlib/fzip_snapshot_20090608.zip)
- [Download as3zlib](/examples/fzip_as3zlib/as3zlib_snapshot_20090608.zip)
- [Google Code Home for as3zlib](http://code.google.com/p/as3zlib/)
- [View FZip decompress example](/examples/fzip_as3zlib/fzip.html)

In FZipFile.as:

```actionscript
// Adobe Air supports inflate decompression.
			<span style="color: #808080; font-style: italic;">// If we got here, this is an Air application</span>
			<span style="color: #808080; font-style: italic;">// and we can decompress without using the Adler32 hack</span>
			<span style="color: #808080; font-style: italic;">// so we just write out the raw deflate compressed file</span>
<span style="color: #808080; font-style: italic;">// Add zlib header</span>
			<span style="color: #808080; font-style: italic;">// CMF (compression method and info)</span>
<span style="color: #808080; font-style: italic;">// FLG (compression level, preset dict, checkbits)</span>
<span style="color: #808080; font-style: italic;">// Add raw deflate-compressed file</span>
<span style="color: #808080; font-style: italic;">// Add adler32 checksum</span>
<span style="color: #808080; font-style: italic;">//throw new Error("Adler32 checksum not found.");</span>
<span style="color: #ff0000;">"Compression method "</span><span style="color: #ff0000;">" is not supported."</span><span style="color: #ff0000;">"deflate"</span><span style="color: #ff0000;">"decompress success:"</span><span style="color: #ff0000;">"stream error:"</span><span style="color: #ff0000;">" "</span><span style="color: #ff0000;">"data error:"</span><span style="color: #ff0000;">" "</span><span style="color: #808080; font-style: italic;">//} else {</span>
				<span style="color: #808080; font-style: italic;">//	System.println("status:" + this.filename + " " + err);</span>
 
```