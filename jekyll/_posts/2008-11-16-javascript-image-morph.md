---
id: 75
title: 'Javascript Image Morph'
date: 2008-11-16 17:00:49
author: Tea
layout: post
guid: '/?p=75'
permalink: /2008/11/16/javascript-image-morph/
dsq_thread_id:
    - '475444242'
categories:
    - web
tags:
    - 'javascript morph scripalicious prototype'
---

I've been working on an image gallery and needed a way to do nice fade/morphs between a list of images for a slideshow. I used prototype and scriptalicious. Here is how I did it:

[See the Demo Here](/examples/javascript_image_morph/)

[Download Entire Source of Example](/examples/javascript_image_morph/javascript_image_morph.zip)

Javascript to do the work:

```javascript
<span style="color: #009900; font-style: italic;">//preload the images and load them into an array</span>
<span style="color: #3366CC;">'photo_01.jpg'</span><span style="color: #3366CC;">'photo_02.jpg'</span><span style="color: #3366CC;">'photo_03.jpg'</span><span style="color: #3366CC;">'photo_04.jpg'</span><span style="color: #3366CC;">'photo_05.jpg'</span>;
imageArray<span style="color: #66cc66;">[</span>imageArray.<span style="color: #006600;">length</span><span style="color: #66cc66;">]</span> = image05;
 
<span style="color: #009900; font-style: italic;">// imageIndex is going to be the index of the next image to display.  </span>
<span style="color: #009900; font-style: italic;">// images 0 and 1 are already loaded into the html</span>
<span style="color: #009900; font-style: italic;">// place the next image to be displayed to the front</span>
	$<span style="color: #66cc66;">(</span><span style="color: #3366CC;">'imageFront'</span><span style="color: #009900; font-style: italic;">// make the image in front appear, when it is done swap it with the image in the back</span>
<span style="color: #3366CC;">'imageFront'</span><span style="color: #009900; font-style: italic;">// make the image in the back the same src as the image in the front</span>
			$<span style="color: #66cc66;">(</span><span style="color: #3366CC;">'imageBehind'</span><span style="color: #66cc66;">)</span>.<span style="color: #006600;">src</span> = $<span style="color: #66cc66;">(</span><span style="color: #3366CC;">'imageFront'</span><span style="color: #66cc66;">)</span>.<span style="color: #006600;">src</span>;
			
			<span style="color: #009900; font-style: italic;">//hide the image in the front</span>
			$<span style="color: #66cc66;">(</span><span style="color: #3366CC;">'imageFront'</span><span style="color: #3366CC;">'none'</span>;
			
			<span style="color: #009900; font-style: italic;">// increment the index</span>
<span style="color: #009900; font-style: italic;">// if we have indexed past the end of the array, go back to zero</span>
 
```

Within the HTML, the only tricky thing here is that you need to position the two IMG tags so they are on top of each other. For my purpose absolute positioning was okay. It may take alittle more work for relative positioning.

```php
<html>
<head>
	<script type=<span style="color: #ff0000;">"text/javascript"</span> src=<span style="color: #ff0000;">"js/prototype.js"</span><span style="color: #ff0000;">"text/javascript"</span> src=<span style="color: #ff0000;">"js/scriptaculous.js?load=effects"</span><span style="color: #ff0000;">"javascript"</span>>
             <span style="color: #808080; font-style: italic;">/* code from above goes here */</span><span style="color: #ff0000;">"setInterval('switchImage()', 3000);"</span>>
	<img id=<span style="color: #ff0000;">"imageBehind"</span> src=<span style="color: #ff0000;">"photo_01.jpg"</span> style=<span style="color: #ff0000;">"position:absolute; top:0; left:0;"</span> />
	<img id=<span style="color: #ff0000;">"imageFront"</span> src=<span style="color: #ff0000;">"photo_02.jpg"</span> style=<span style="color: #ff0000;">"position:absolute; top:0; left:0; display:none;"</span> />
</body>
</html>
```

\*\* update. thanks to [Star](http://www.thisisstar.com) for letting me know that the morph blinked in Firefox 2.0. I fixed the post and the example so it doesn't do that anymore. \*\*

</body></html>