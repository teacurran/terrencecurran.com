---
id: 634
title: 'Haar cascade logo detection'
date: '2015-09-08T22:12:28-04:00'
author: Tea
layout: revision
guid: '/2015/09/08/558-revision-v1/'
permalink: '/?p=634'
---

This is a proof of concept I did for a client earlier in the year for detecting a logo in a live video feed. We trained a haar cascade with about 100 shots of a coke can and it was able to pretty accurately track the logo in the vertical position. With more compute power and more training images we could get it to track even tighter and in more lighting conditions.

This demo was done entirely in OpenCV but later in the project were able to port it to ActionScript to work in a browser with a user's webcam.

<iframe allowfullscreen="" frameborder="0" height="315" loading="lazy" src="https://www.youtube.com/embed/NOARIVlE5wo" width="420"></iframe>