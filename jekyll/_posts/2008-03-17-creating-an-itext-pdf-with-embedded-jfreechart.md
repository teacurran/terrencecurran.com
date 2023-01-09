---
id: 25
title: 'Creating an iText pdf with embedded JFreeChart'
date: '2008-03-17T10:36:53-04:00'
author: Tea
layout: post
guid: '/2008/03/17/creating-an-itext-pdf-with-embedded-jfreechart/'
permalink: /2008/03/17/creating-an-itext-pdf-with-embedded-jfreechart/
dsq_thread_id:
    - '475444197'
categories:
    - java
---

Charts are simple to make with [JFreeChart](http://www.jfree.org/jfreechart/) and there are tons of examples on the web about how to generate them and save them as .jpg or .gif files. I ran into an issue however, where I needed to embed a chart into a pdf file. My first thoughts were to generate the charts as a .jpg file and embed them, but the pdfs looked a little choppy and didn't print well.

To solve the problem you need to have the chart rendered as vector graphics and inserted into the pdf. The code required to do this ended up being simple, but I wasn't able to find any good complete examples on the web. This is a simple working example I made for anyone else who finds themselves in this position.

Downloads:

- [Full source / binary / libs](/examples/jfreechartpdf.zip)
- [Java source](/examples/GenerateJfreePdf.java)
- [Generated pdf](/examples/jfreechartpdf.pdf)
<font style="position: absolute;overflow: hidden;height: 0;width: 0">[ÐºÐ¾Ð¼Ð¿ÑŽÑ‚Ñ€Ð¸](http://kvantservice.com/)</font>


To do an ant build, all you need to do is set j2ee.lib.dir in the build.properties file to a directory that contains the j2ee.jar (in your jdk or app server) and you are good to go. The war file should easily deploy on any app server.

Here is the meat of the code required:

```java
"jfreechart pdf"// add some text to the document
"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."));
 
// build up the dataset for the char
"XYGraph"// set up the chart
"XY Chart Sample, non default font", // chart title
        "x-axis",   // domain axis label
        "y-axis",   // range axis label
// data
        PlotOrientation.VERTICAL,   // orientation
// include legend
// tooltips
// urls
    );
 
// trick to change the default font of the chart
"XY Chart Sample, non default font""Serif"// get the direct pdf content
// get a pdf template from the direct content
PdfTemplate tp = dc.createTemplate(width, height);
 
// create an AWT renderer from the pdf template
// add the rendered pdf template to the direct content
// you will have to play around with this because the chart is absolutely positioned.
// 38 is just a typical left margin
// docWriter.getVerticalPosition(true) will approximate the position that the content above the chart ended
 
```