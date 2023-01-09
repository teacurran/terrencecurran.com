---
id: 582
title: 'Normalizing faces with OpenCV'
date: 2013-01-08 19:56:33
author: Tea
excerpt: 'One of the things that comes up when doing facial recognition is that you have to build a profile for each face being recognized. I have been playing with is attempting to correct for face rotation by detecting the eyes and then rotating and zooming the face so the eyes always appear at as close to the same place in the training image as possible.'
layout: revision
guid: '/2013/01/08/575-revision-7/'
permalink: '/?p=582'
---

One of the things that comes up when doing facial recognition is that you have to build a profile for each face being recognized. If we simply use a cascade to detect the face and then throw it into the profile set things usually work, but I have found that you get much better results by normalizing the faces as much as possible before processing.

I have been playing with is attempting to correct for face rotation by detecting the eyes and then rotating and zooming the face so the eyes always appear at as close to the same place in the training image as possible.

This example uses OpenCV. It uses one haar cascade to detect the face then uses two more cascades to detect the two eyes. It averages all of the eye detection results which will “often” give you an estimate of where the pupil is. Once you have that the rotating and scaling is pretty easy.

This technique only works really well on head-on faces with a rotation of less than 15 degrees in either direction. It could probably be expanded to rotate the image while doing the eye detection to get a better angle range but faces rotated more than 15 degrees is somewhat rare.

Here are some examples of this normalization:

| ![](/articles/201301_opencv_face_positioning/images/1.jpg) | ![](/articles/201301_opencv_face_positioning/images/1_normalized.jpg) |
|---|---|
| ![](/articles/201301_opencv_face_positioning/images/2.jpg) | ![](/articles/201301_opencv_face_positioning/images/2_normalized.jpg) |
| ![](/articles/201301_opencv_face_positioning/images/3.jpg) | ![](/articles/201301_opencv_face_positioning/images/3_normalized.jpg) |
| ![](/articles/201301_opencv_face_positioning/images/4.jpg) | ![](/articles/201301_opencv_face_positioning/images/4_normalized.jpg) |
| ![](/articles/201301_opencv_face_positioning/images/5.jpg) | ![](/articles/201301_opencv_face_positioning/images/5_normalized.jpg) |
| ![](/articles/201301_opencv_face_positioning/images/6.jpg) | ![](/articles/201301_opencv_face_positioning/images/6_normalized.jpg) |

[![](/img/famfamicons/icons/page_white_put.png)](https://github.com/teacurran/wirelust-opencv-face-position) [Download source code at GitHub](https://github.com/teacurran/wirelust-opencv-face-position)