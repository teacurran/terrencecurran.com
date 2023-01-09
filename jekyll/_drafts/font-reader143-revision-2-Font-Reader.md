---
id: 235
title: 'Font Reader'
date: '2009-04-02T04:38:22-04:00'
author: Tea
layout: revision
guid: '/2009/04/02/143-revision-2/'
permalink: '/?p=235'
---

I've been doing some work with [Five3D](http://five3d.mathieu-badimon.com/) lately. I extended it so I could render text with proper kerning pairs. I hit a bit of a wall though with converting my fonts to as3 since the way Mathieu does it doesn't lend itself well to getting kerning pairs from flash itself.

Looking for an alternative, I started taking a look at [Font Reader](http://www.sephiroth.it/weblog/archives/2007/07/fontreader_convert_truetype_fonts_in.php) which is a port of a project called [Typecast](https://typecast.dev.java.net/) I saw a few years back.

Anyway. Long story short, I've been up all night playing around with and extending Font Reader (for my current project, but also because it's fun to play with).

The version that is posted on the site uses a custom written path renderer which seems to have some bugs. In particular it seems to clip at the end of a logical path segment.  
![](/img/entries/FontRenderer1.png)

The custom objects were very close to the new stuff in the Flex 4 gumbo stuff from Adobe, so I was able to easily swap them out and use the Adobe classes instead. Since that was so easy, I started working on getting editable point handles so I can start editing the paths within the application. I have this about 75% done, but I can't help quell that feeling that there must be a reusable class out there someone else wrote. Anyone know of one?

Here's a screen shot of my current working build for comparison:  
![](/img/entries/FontRenderer2.png)

If I get this working by next week, I'll post the code.