---
id: 558
title: 'Haar cascade logo detection'
date: 2011-11-08 12:14:33
author: Tea
layout: post
guid: '/?p=558'
permalink: /2011/11/08/haar-cascade-logo-detection/
dsq_thread_id:
    - '699874205'
categories:
    - Uncategorized
---

This is a proof of concept I did for a client earlier in the year for detecting a logo in a live video feed. We trained a haar cascade with about 100 shots of a coke can and it was able to pretty accurately track the logo in the vertical position. With more compute power and more training images we could get it to track even tighter and in more lighting conditions.

This demo was done entirely in OpenCV but later in the project were able to port it to ActionScript to work in a browser with a user's webcam.

<iframe allowfullscreen="" frameborder="0" height="315" loading="lazy" src="https://www.youtube.com/embed/NOARIVlE5wo" width="420"></iframe>