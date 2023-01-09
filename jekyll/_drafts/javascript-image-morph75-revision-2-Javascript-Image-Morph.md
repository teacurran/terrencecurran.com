---
id: 85
title: 'Javascript Image Morph'
date: 2008-11-16 17:00:49
author: Tea
layout: revision
guid: '/2008/11/16/75-revision-2/'
permalink: '/?p=85'
---

I've been working on an image gallery and needed a way to do nice fade/morphs between a list of images for a slideshow. I used prototype and scriptalicious. Here is how I did it:

[See the Demo Here](/examples/javascript_image_morph/)

Javascript to do the work:

```javascript
//preload the images and load them into an array
'photo_01.jpg''photo_02.jpg''photo_03.jpg''photo_04.jpg''photo_05.jpg';
imageArray[imageArray.length] = image05;
 
// imageIndex is going to be the index of the next image to display.  
// images 0 and 1 are already loaded into the html
// make the image in front appear, when it is done swap it with the image in the back
'imageFront'// make the image in the back the same src as the image in the front
			$('imageBehind').src = $('imageFront').src;
			
			//hide the image in the front
			$('imageFront''none';
			
			// place the next image to be displayed to the front
			$('imageFront'// increment the index
// if we have indexed past the end of the array, go back to zero
 
```

Within the HTML, the only tricky thing here is that you need to position the two IMG tags so they are on top of each other. For my purpose absolute positioning was okay. It may take alittle more work for relative positioning.

```php
<html>
<head>
	<script type="text/javascript" src="js/prototype.js""text/javascript" src="js/scriptaculous.js?load=effects""javascript">
             /* code from above goes here */"setInterval('switchImage()', 3000);">
	<img id="imageBehind" src="photo_01.jpg" style="position:absolute; top:0; left:0;" />
	<img id="imageFront" src="photo_02.jpg" style="position:absolute; top:0; left:0; display:none;" />
</body>
</html>
```

</body></html>