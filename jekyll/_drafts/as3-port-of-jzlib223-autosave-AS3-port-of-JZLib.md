---
id: 454
title: 'AS3 port of JZLib'
date: 2010-02-09 15:32:15
author: Tea
excerpt: "One tricky thing about FZip is that when running in Flash Player it requires your zip files to have an adler32 checksum for each file in order to work.  This is normally fixed with a work around python script provided with FZip.   \n\nThe python script is easy and all, but why not figure out how to do it in pure AS3 with more standard zip files?"
layout: revision
guid: '/2010/02/09/223-autosave/'
permalink: '/?p=454'
---

Last month I was working on a project that used [FZip](http://codeazur.com.br/lab/fzip/) to decompress some zip files in flash.

One tricky thing about FZip is that when running in Flash Player it requires your zip files to have an adler32 checksum for each file in order to work. This is normally fixed with a work around python script provided with FZip.

The python script is easy and all, but why not figure out how to do it in pure AS3 with more standard zip files?

The checksum is needed because AS3's ByteArray only supports ZLib when running in Flash Player. In AIR it supports deflate which is what zip files use by default. I would be really curious to hear from Adobe why they chose not to support deflate since you need deflate for Zlib to work anyway.

I decided to implement inflate in as3 but I didn't want to do it with new code so I looked for FOSS projects to port. [JZlib](http://www.jcraft.com/jzlib/) was a good choice because Java is similar to AS3 and it didn't rely on any external system calls.

This port supports everything in JZlib so you can use it for any inflate or deflate operations you might need.

### To use with FZip

I used this library in FZip so it no longer requires that zip files be converted before use. It is tested to be working with the OSX cli zip command. It doesn't work with OSX finder zip compression because of another issue.

- [Download Modified FZip Source](/examples/fzip_as3zlib/fzip_snapshot_20100209.zip)
- [Download as3zlib](/examples/fzip_as3zlib/as3zlib_snapshot_20090608.zip)
- [Google Code Home for as3zlib](http://code.google.com/p/as3zlib/)
- [View FZip decompress example](/examples/fzip_as3zlib/fzip.html)

**In FZipFile.as:**

```actionscript
// Adobe Air supports inflate decompression.
			// If we got here, this is an Air application
			// and we can decompress without using the Adler32 hack
			// so we just write out the raw deflate compressed file
// Add zlib header
			// CMF (compression method and info)
// FLG (compression level, preset dict, checkbits)
// Add raw deflate-compressed file
// Add adler32 checksum
//throw new Error("Adler32 checksum not found.");
"Compression method "" is not supported.""deflate""decompress success:""stream error:"" ""data error:"" "//} else {
				//	System.println("status:" + this.filename + " " + err);
 
```

\*\*\* UPDATE 2/9/2010: Thanks to Kathrin Furtlehner for sending me a test case for a bug where it wasn't extracting the full file when dealing with longer strings. I updated the patched FZip archive to re

<k_furtlehner>  
 Subject: attached file</k_furtlehner>