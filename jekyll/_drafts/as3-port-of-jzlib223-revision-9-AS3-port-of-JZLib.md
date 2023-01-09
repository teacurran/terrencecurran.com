---
id: 232
title: 'AS3 port of JZLib'
date: '2009-06-08T03:24:32-04:00'
author: Tea
excerpt: 'Actionscript 3 port of ZLib'
layout: revision
guid: '/2009/06/08/223-revision-9/'
permalink: '/?p=232'
---

Last month I was working on a project that used [FZip](http://codeazur.com.br/lab/fzip/) to decompress some zip files in flash.

One tricky thing about FZip is that when running in Flash Player it requires your zip files to have an adler32 checksum for each file in order to work. This is normally fixed with a work around python script provided with FZip.

The python script is easy and all, but why not figure out how to do it in pure AS3 with more standard zip files?

The checksum is needed because AS3's ByteArray only supports ZLib when running in Flash Player. In AIR it supports deflate which is what zip files use by default. I would be really curious to hear from Adobe why they chose not to support deflate since you need deflate for Zlib to work anyway.

I decided to implement inflate in as3 but I didn't want to do it with new code so I looked for FOSS projects to port. [JZlib](http://www.jcraft.com/jzlib/) was a good choice because Java is similar to AS3 and it didn't rely on any external system calls.

This port supports everything in JZlib so you can use it for any inflate or deflate operations you might need.

### To use with FZip

I used this library in FZip so it no longer requires that zip files be converted before use. It is tested to be working with the OSX cli zip command. It doesn't work with OSX finder zip compression because of another issue.

- [Download Modified FZip Source](/examples/fzip_as3zlib/fzip_snapshot_20090608.zip)
- [Download as3zlib](/examples/fzip_as3zlib/as3zlib_snapshot_20090608.zip)
- [Google Code Home for as3zlib](http://code.google.com/p/as3zlib/)
- [View FZip decompress example](/examples/fzip_as3zlib/fzip.html)

**In FZipFile.as:**

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